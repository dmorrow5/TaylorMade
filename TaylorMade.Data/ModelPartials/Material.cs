using System;
using TaylorMade.Web.Api;

namespace TaylorMade.Data.Models
{
    public partial class Material : IKeyed<Guid>
    {
        
    }

    public partial class MaterialDto : DtoForEntity<Material, Guid>
    {
        public int Quantity { get; set; }
        public string Name { get; set; }
        public decimal Cost { get; set; }
        public string Description { get; set; }
    }
}
