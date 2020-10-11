using System;
using TaylorMade.Web.Api;

namespace TaylorMade.Data.Models
{
    public partial class Employee : IKeyed<Guid>
    {
        
    }

    public partial class EmployeeDto : DtoForEntity<Employee, Guid>
    {
        public string Name { get; set; }
        public int Title { get; set; }
        public decimal HourlyPay { get; set; }
        public DateTimeOffset? StartDate { get; set; }
        public DateTimeOffset? FinishDate { get; set; }
        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public string Description { get; set; }
    }
}
