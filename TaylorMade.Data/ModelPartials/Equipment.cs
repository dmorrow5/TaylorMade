using System;
using TaylorMade.Web.Api;

namespace TaylorMade.Data.Models
{
    public partial class Equipment : IKeyed<Guid>
    {
        
    }

    public partial class EquipmentDto : DtoForEntity<Equipment, Guid>
    {
        public int Quantity { get; set; }
        public string Name { get; set; }
        public decimal Cost { get; set; }
        public string Location { get; set; }
        public string Description { get; set; }
    }
}
