using System;
using System.Collections.Generic;

namespace TaylorMade.Data.Models
{
    public partial class ProjectType
    {
        public ProjectType()
        {
            EquipmentProjectTypes = new HashSet<EquipmentProjectTypes>();
            Project = new HashSet<Project>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<EquipmentProjectTypes> EquipmentProjectTypes { get; set; }
        public ICollection<Project> Project { get; set; }
    }
}
