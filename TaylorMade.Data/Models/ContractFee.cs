using System;
using System.Collections.Generic;

namespace TaylorMade.Data.Models
{
    public partial class ContractFee
    {
        public ContractFee()
        {
            LineItem = new HashSet<LineItem>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public decimal Cost { get; set; }
        public string Description { get; set; }

        public ICollection<LineItem> LineItem { get; set; }
    }
}
