using System;
using TaylorMade.Web.Api;

namespace TaylorMade.Data.Models
{
    public partial class ProjectType : IKeyed<Guid>
    {
        
    }

    public partial class ProjectTypeDto : DtoForEntity<ProjectType, Guid>
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
