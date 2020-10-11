using System;
using Microsoft.AspNetCore.Mvc;
using TaylorMade.Data.Models;
using TaylorMade.Web.Api.Controllers;

namespace TaylorMade.Web.Controllers
{
    [ApiController]
    public class ContractController : RestfullApiController<Contract, Guid, ContractDto, TaylorMadeContext>
    {
        public ContractController(TaylorMadeContext dbContext) : base(dbContext)
        {
        }
    }
}
