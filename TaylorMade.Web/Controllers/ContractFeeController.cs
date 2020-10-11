using System;
using Microsoft.AspNetCore.Mvc;
using TaylorMade.Data.Models;
using TaylorMade.Web.Api.Controllers;

namespace TaylorMade.Web.Controllers
{
    [ApiController]
    public class ContractFeeController : RestfullApiController<ContractFee, Guid, ContractFeeDto, TaylorMadeContext>
    {
        public ContractFeeController(TaylorMadeContext dbContext) : base(dbContext)
        {
        }
    }
}
