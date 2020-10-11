using System;
using System.Collections.Generic;

namespace TaylorMade.Data.Models
{
    public partial class Employee
    {
        public Employee()
        {
            LineItem = new HashSet<LineItem>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Title { get; set; }
        public decimal HourlyPay { get; set; }
        public DateTimeOffset? StartDate { get; set; }
        public DateTimeOffset? FinishDate { get; set; }
        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public string Description { get; set; }

        public ICollection<LineItem> LineItem { get; set; }
    }
}
