using System;
using TaylorMade.Web.Api;

namespace TaylorMade.Data.Models
{
    public partial class ContractFee : IKeyed<Guid>
    {
        
    }

    public partial class ContractFeeDto : DtoForEntity<ContractFee, Guid>
    {
        public string Name { get; set; }
        public decimal Cost { get; set; }
        public string Description { get; set; }
    }
}
