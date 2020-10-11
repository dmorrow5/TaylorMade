using System;
using System.Collections.Generic;

namespace TaylorMade.Data.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Contract = new HashSet<Contract>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public string Description { get; set; }

        public ICollection<Contract> Contract { get; set; }
    }
}
