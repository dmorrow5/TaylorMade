using System;
using System.Collections.Generic;

namespace TaylorMade.Data.Models
{
    public partial class Contract
    {
        public Guid Id { get; set; }
        public Guid CustomerId { get; set; }
        public Guid ProjectId { get; set; }
        public string Name { get; set; }
        public DateTimeOffset StartDate { get; set; }
        public DateTimeOffset? FinishDate { get; set; }
        public decimal? EstimatedCost { get; set; }
        public decimal? ActualCost { get; set; }
        public bool? QuoteAccepted { get; set; }
        public string Notes { get; set; }

        public Customer Customer { get; set; }
        public Project Project { get; set; }
    }
}
