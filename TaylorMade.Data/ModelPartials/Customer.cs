using System;
using TaylorMade.Web.Api;

namespace TaylorMade.Data.Models
{
    public partial class Customer : IKeyed<Guid>
    {
        
    }

    public partial class CustomerDto : DtoForEntity<Customer, Guid>
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public string Description { get; set; }
    }
}
