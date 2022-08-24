using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using College_Management.Models;

namespace College_Management.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly CollegeContext _context;

        public StudentsController(CollegeContext context)
        {
            _context = context;
        }

        // GET: api/Students
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Studentsmark>>> GetStudents()
        {
            var e = await  (from t in  _context.Departments
                     join s in _context.Students on t.DeptId equals s.DeptId
                    
                     select new Studentsmark

                     {
                         StudentId = s.StudentId,
                         Name = s.Name,
                         RollNumber = s.RollNumber,
                         Email = s.Email,
                         Phone = s.Phone,
                         Password = s.Password,
                         Dob = s.Dob,
                         Address = s.Address,
                         CurrentYear = s.CurrentYear,
                         DeptName = t.DeptName,
                         


                     }).ToListAsync();
            return  Ok(e);
        }

        // GET: api/Students/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(int id)
        {
            var student = await _context.Students.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            return student;
        }

        // PUT: api/Students/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult PutStudent(int id, Student student)
        {
            Student obj = _context.Students.Where(x => x.StudentId == id).SingleOrDefault();
            obj.Name = student.Name;
            obj.RollNumber = student.RollNumber;
            obj.Email = student.Email;
            obj.Phone = student.Phone;
            obj.Dob = student.Dob;
            obj.Password = student.Password;
            obj.Address = student.Address;
            obj.CurrentYear = student.CurrentYear;
            obj.DeptId = student.DeptId;
            obj.CourseId = student.CourseId;
            _context.SaveChanges();
            return Ok();
        }

        // POST: api/Students
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public  bool PostStudent(Student student)
        {
              _context.Students.Add(student);
              _context.SaveChangesAsync();

            return true;
        }

        // DELETE: api/Students/5
        [HttpGet]
        [Route("DeleteStudent")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            Mark obj = await _context.Marks.Where(x => x.StudentId == id).SingleOrDefaultAsync();
            if(obj != null)
            {
                _context.Marks.Remove(obj);
                await _context.SaveChangesAsync();
            }
           

            Student student = await _context.Students.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            _context.Students.Remove(student);
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool StudentExists(int id)
        {
            return _context.Students.Any(e => e.StudentId == id);
        }

        [HttpGet]
        [Route("CheckResult")]
        public async Task<IActionResult> CheckResult(string rollno, string password)
        {
            Student obj = await _context.Students.Where(x => x.RollNumber == rollno).SingleOrDefaultAsync();
            //bool isExist = false;
            string result = "";
            
            if(obj == null)
            {
                result = "false";
            }
            else if(obj.RollNumber == rollno)
            {

                if(obj.Password == password)
                {
                    result = "true";
                }

                else
                {
                    result = "false";
                }

            }
            else
            {
                result = "false";
            }
            return Ok(result);
        }

        [HttpGet]
        [Route("GetMarks")]
        public  IActionResult GetMarks(string rollno)
        {
            //Student obj = await _context.Students.Where(x => x.RollNumber == rollno).SingleOrDefaultAsync();

            
                var e = (from t in _context.Marks
                         join s in _context.Students on t.StudentId equals s.StudentId
                         join d in _context.Departments on s.DeptId equals d.DeptId
                         where  s.RollNumber == rollno
                         select new Studentsmark

                         {
                             Name = s.Name,
                             RollNumber = s.RollNumber,
                             CurrentYear = s.CurrentYear,
                             DeptName = d.DeptName,
                             Sem1 = t.Sem1,
                             Sem2 = t.Sem2,
                             Sem3 = t.Sem3,
                             Sem4 = t.Sem4,
                             Sem5 = t.Sem5,
                             Sem6 = t.Sem6,
                             Sem7 = t.Sem7,
                             Sem8 = t.Sem8,
                             Cgpa = t.Cgpa


                         }).ToList();

                
            

            return Ok(e);
        }

        [HttpGet]
        [Route("AdminLogin")]
        public   IActionResult AdminLogin(string rollno, string password)
        {
            string Roll = rollno.ToUpper();
            string result = "";

            if (Roll == null)
            {
                result = "false";
            }
            else if (Roll == "ADMIN")
            {

                if (password == "Bala1234")
                {
                    result = "true";
                }

                else
                {
                    result = "false";
                }

            }
            else
            {
                result = "false";
            }
            return Ok(result);
        }


        
    }
}
