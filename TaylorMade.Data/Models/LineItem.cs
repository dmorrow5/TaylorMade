using System;
using System.Collections.Generic;

namespace TaylorMade.Data.Models
{
    public partial class LineItem
    {
        public Guid Id { get; set; }
        public Guid ProjectId { get; set; }
        public Guid? EquipmentId { get; set; }
        public Guid? MaterialId { get; set; }
        public Guid? ContractFeeId { get; set; }
        public Guid? EmployeeId { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public string Description { get; set; }

        public ContractFee ContractFee { get; set; }
        public Employee Employee { get; set; }
        public Equipment Equipment { get; set; }
        public Material Material { get; set; }
        public Project Project { get; set; }
    }
}
