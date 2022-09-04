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
    public class MarksController : ControllerBase
    {
        private readonly CollegeContext _context;

        public MarksController(CollegeContext context)
        {
            _context = context;
        }

        // GET: api/Marks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Mark>>> GetMarks()
        {
            var e = await (from s in _context.Students
                           join t in _context.Marks on s.StudentId equals t.StudentId

                           select new Studentsmark

                           {
                             StudentId = s.StudentId,
                               MarkId = t.MarkId,
                               RollNumber = s.RollNumber,
                               Sem1 = t.Sem1,
                               Sem2 = t.Sem2,
                               Sem3 = t.Sem3,
                               Sem4 = t.Sem4,
                               Sem5 = t.Sem5,
                               Sem6 = t.Sem6,
                               Sem7 = t.Sem7,
                               Sem8 = t.Sem8,
                               Cgpa = t.Cgpa

                           }).ToListAsync();
            return Ok(e);
        }

        // GET: api/Marks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Mark>> GetMark(int id)
        {
            var mark = await _context.Marks.FindAsync(id);

            if (mark == null)
            {
                return NotFound();
            }

            return mark;
        }

        // PUT: api/Marks/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMark(int id, Mark mark)
        {
            Mark obj = _context.Marks.Where(x => x.MarkId == id).SingleOrDefault();
            obj.StudentId = mark.StudentId;
            obj.Sem1 = mark.Sem1;
            obj.Sem2 = mark.Sem2;
            obj.Sem3 = mark.Sem3;
            obj.Sem4 = mark.Sem4;
            obj.Sem5 = mark.Sem5;
            obj.Sem6 = mark.Sem6;
            obj.Sem7 = mark.Sem7;
            obj.Sem8 = mark.Sem8;
            obj.Cgpa = mark.Cgpa;



            _context.SaveChanges();
            return Ok();
        }

        // POST: api/Marks
        [HttpPost]
        public bool PostMark(Mark mark)
        {
            _context.Marks.Add(mark);
            _context.SaveChangesAsync();

            return true;
        }

        // DELETE: api/Marks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMark(int id)
        {
            var mark = await _context.Marks.FindAsync(id);
            if (mark == null)
            {
                return NotFound();
            }

            _context.Marks.Remove(mark);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MarkExists(int id)
        {
            return _context.Marks.Any(e => e.MarkId == id);
        }

        [HttpGet]
        [Route ("GetStudentsByMarks")]

        public IActionResult GetStudentsByMarks()
        {
            var marks = _context.Marks.ToList();
            var students = _context.Students.ToList();

            foreach (var item in marks)
            {
                Mark obj = marks.Where(x => x.StudentId == item.StudentId).SingleOrDefault();
                Student studentobj = students.Where(x => x.StudentId == obj.StudentId).SingleOrDefault();
                students.Remove(studentobj);
            }

            return Ok(students);
        }
    }
}
