using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace College_Management.Models
{
    public class Studentsmark
    {
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

        public int MarkId { get; set; }
        public double? Sem1 { get; set; }
        public double? Sem2 { get; set; }
        public double? Sem3 { get; set; }
        public double? Sem4 { get; set; }

        public double? Sem5 { get; set; }

        public double? Sem6 { get; set; }
        public double? Sem7 { get; set; }
        public double? Sem8 { get; set; }
        public double? Cgpa { get; set; }

        public string DeptName { get; set; }
        public string CourseName { get; set; }
        public string Duration { get; set; }
        public string CourseFee { get; set; }
    }
}
