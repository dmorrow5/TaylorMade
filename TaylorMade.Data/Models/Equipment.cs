using System;
using System.Collections.Generic;

namespace TaylorMade.Data.Models
{
    public partial class Equipment
    {
        public Equipment()
        {
            EquipmentProjectTypes = new HashSet<EquipmentProjectTypes>();
            LineItem = new HashSet<LineItem>();
        }

        public Guid Id { get; set; }
        public int Quantity { get; set; }
        public string Name { get; set; }
        public decimal Cost { get; set; }
        public string Location { get; set; }
        public string Description { get; set; }

        public ICollection<EquipmentProjectTypes> EquipmentProjectTypes { get; set; }
        public ICollection<LineItem> LineItem { get; set; }
    }
}
