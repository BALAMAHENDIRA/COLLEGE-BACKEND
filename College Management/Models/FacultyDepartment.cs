using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace College_Management.Models
{
    public class FacultyDepartment
    {
        public int FacultyId { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public decimal? Salary { get; set; }
        public int? DeptId { get; set; }

        public string DeptName { get; set; }
    }
}
