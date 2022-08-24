using System;
using System.Collections.Generic;

#nullable disable

namespace College_Management.Models
{
    public partial class Course
    {
        public Course()
        {
            Students = new HashSet<Student>();
        }

        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public string Duration { get; set; }
        public string CourseFee { get; set; }
        public int? DeptId { get; set; }

        public virtual Department Dept { get; set; }
        public virtual ICollection<Student> Students { get; set; }
    }
}
