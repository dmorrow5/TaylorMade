using System;
using TaylorMade.Web.Api;

namespace TaylorMade.Data.Models
{
    public partial class LineItem : IKeyed<Guid>
    {
        
    }

    public partial class LineItemDto : DtoForEntity<LineItem, Guid>
    {
        public string Name { get; set; }
        public int Quantity { get; set; }
        public string Description { get; set; }
    }
}
