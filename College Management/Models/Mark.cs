using System;
using System.Collections.Generic;

#nullable disable

namespace College_Management.Models
{
    public partial class Mark
    {
        public int MarkId { get; set; }
        public int? StudentId { get; set; }
        public double? Sem1 { get; set; }
        public double? Sem2 { get; set; }
        public double? Sem3 { get; set; }
        public double? Sem4 { get; set; }
        public double? Sem5 { get; set; }
        public double? Sem6 { get; set; }
        public double? Sem7 { get; set; }
        public double? Sem8 { get; set; }
        public double? Cgpa { get; set; }

        public virtual Student Student { get; set; }
    }
}
