using System;
using System.Collections.Generic;

namespace TaylorMade.Data.Models
{
    public partial class EquipmentProjectTypes
    {
        public Guid Id { get; set; }
        public Guid EquipmentId { get; set; }
        public Guid ProjectTypeId { get; set; }

        public Equipment Equipment { get; set; }
        public ProjectType ProjectType { get; set; }
    }
}
