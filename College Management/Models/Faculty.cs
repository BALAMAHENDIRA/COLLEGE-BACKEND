using System;
using System.Collections.Generic;

#nullable disable

namespace College_Management.Models
{
    public partial class Faculty
    {
        public int FacultyId { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public decimal? Salary { get; set; }
        public int? DeptId { get; set; }

        public virtual Department Dept { get; set; }
    }
}
