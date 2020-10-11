using System;
using TaylorMade.Web.Api;

namespace TaylorMade.Data.Models
{
    public partial class Project : IKeyed<Guid>
    {
        
    }

    public partial class ProjectDto : DtoForEntity<Project, Guid>
    {
        public Guid ProjectTypeId { get; set; }
        public string Name { get; set; }
        public int PropertyType { get; set; }
        public string Description { get; set; }
    }
}
