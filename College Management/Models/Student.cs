using System;
using System.Collections.Generic;

#nullable disable

namespace College_Management.Models
{
    public partial class Student
    {
        public Student()
        {
            Marks = new HashSet<Mark>();
        }

        public int StudentId { get; set; }
        public string RollNumber { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Dob { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public string CurrentYear { get; set; }
        public int? DeptId { get; set; }
        public int? CourseId { get; set; }

        public virtual Course Course { get; set; }
        public virtual Department Dept { get; set; }
        public virtual ICollection<Mark> Marks { get; set; }
    }
}
