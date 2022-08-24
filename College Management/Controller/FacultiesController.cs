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
    public class FacultiesController : ControllerBase
    {
        private readonly CollegeContext _context;

        public FacultiesController(CollegeContext context)
        {
            _context = context;
        }

        // GET: api/Faculties
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Faculty>>> GetFaculties()
        {
            var e = await (from t in _context.Departments
                           join s in _context.Faculties on t.DeptId equals s.DeptId

                           select new FacultyDepartment

                           {
                             FacultyId = s.FacultyId,
                             Name = s.Name,
                             Phone = s.Phone,
                             Email = s.Email,
                             Address = s.Address,
                             Salary = s.Salary,
                               DeptId = s.DeptId,

                               DeptName = t.DeptName
 
                           }).ToListAsync();
            return Ok(e);
        }

        // GET: api/Faculties/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Faculty>> GetFaculty(int id)
        {
            var faculty = await _context.Faculties.FindAsync(id);

            if (faculty == null)
            {
                return NotFound();
            }

            return faculty;
        }

        // PUT: api/Faculties/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public    IActionResult PutFaculty(int id, Faculty faculty)
        {
            Faculty obj = _context.Faculties.Where(x => x.FacultyId == id).SingleOrDefault();
            obj.Name = faculty.Name;
            obj.Phone = faculty.Phone;
            obj.Email = faculty.Email;
            obj.Address = faculty.Address;
            obj.Salary = faculty.Salary;
            obj.DeptId = faculty.DeptId;

            _context.SaveChanges();
            return Ok();
        }

        // POST: api/Faculties
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public bool PostFaculty(Faculty faculty)
        {
            _context.Faculties.Add(faculty);
            _context.SaveChangesAsync();

            return true;
        }

        // DELETE: api/Faculties/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFaculty(int id)
        {
            var faculty = await _context.Faculties.FindAsync(id);
            if (faculty == null)
            {
                return NotFound();
            }

            _context.Faculties.Remove(faculty);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FacultyExists(int id)
        {
            return _context.Faculties.Any(e => e.FacultyId == id);
        }
    }
}
