using System;
using System.Collections.Generic;

namespace TaylorMade.Data.Models
{
    public partial class Project
    {
        public Project()
        {
            Contract = new HashSet<Contract>();
            LineItem = new HashSet<LineItem>();
        }

        public Guid Id { get; set; }
        public Guid ProjectTypeId { get; set; }
        public string Name { get; set; }
        public int PropertyType { get; set; }
        public string Description { get; set; }

        public ProjectType ProjectType { get; set; }
        public ICollection<Contract> Contract { get; set; }
        public ICollection<LineItem> LineItem { get; set; }
    }
}
