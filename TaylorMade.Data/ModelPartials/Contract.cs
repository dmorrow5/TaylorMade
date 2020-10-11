using System;
using TaylorMade.Web.Api;

namespace TaylorMade.Data.Models
{
    public partial class Contract : IKeyed<Guid>
    {
        
    }

    public partial class ContractDto : DtoForEntity<Contract, Guid>
    {
        public string Name { get; set; }
        public Guid ProjectId { get; set; }
        public Guid CustomerId { get; set; }
        public DateTimeOffset StartDate { get; set; }
        public DateTimeOffset? FinishDate { get; set; }
        public decimal? EstimatedCost { get; set; }
        public decimal? ActualCost { get; set; }
        public bool? QuoteAccepted { get; set; }
        public string Notes { get; set; }
    }
}
