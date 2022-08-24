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
    public class CoursesController : ControllerBase
    {
        private readonly CollegeContext _context;

        public CoursesController(CollegeContext context)
        {
            _context = context;
        }

        // GET: api/Courses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
        {
            var e = await (from t in _context.Courses
                           join s in _context.Departments on t.DeptId equals s.DeptId

                           select new Studentsmark

                           {
                             CourseId = t.CourseId,
                             CourseName = t.CourseName,
                             Duration = t.Duration,
                             CourseFee = t.CourseFee,
                             DeptId = t.DeptId,
                             DeptName = s.DeptName

                           }).ToListAsync();
            return Ok(e);
        }

        // GET: api/Courses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetCourse(int id)
        {
            var course = await _context.Courses.FindAsync(id);

            if (course == null)
            {
                return NotFound();
            }

            return course;
        }

        // PUT: api/Courses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public   IActionResult PutCourse(int id, Course course)
        {
            Course obj = _context.Courses.Where(x => x.CourseId == id).SingleOrDefault();
            obj.CourseName = course.CourseName;
            obj.Duration = course.Duration;
            obj.CourseFee = course.CourseFee;
            obj.DeptId = course.DeptId;



            _context.SaveChanges();
            return Ok();
        }

        // POST: api/Courses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public bool  PostCourse(Course course)
        {
            _context.Courses.Add(course);
            _context.SaveChanges();

            return true;
        }

        // DELETE: api/Courses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(int id)
        {
            var course = await _context.Courses.FindAsync(id);
            if (course == null)
            {
                return NotFound();
            }

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CourseExists(int id)
        {
            return _context.Courses.Any(e => e.CourseId == id);
        }
    }
}
