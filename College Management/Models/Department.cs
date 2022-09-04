using System;
using System.Collections.Generic;

#nullable disable

namespace College_Management.Models
{
    public partial class Department
    {
        public Department()
        {
            Faculties = new HashSet<Faculty>();
            Students = new HashSet<Student>();
        }

        public int DeptId { get; set; }
        public string DeptName { get; set; }

        public virtual ICollection<Faculty> Faculties { get; set; }
        public virtual ICollection<Student> Students { get; set; }
    }
}
