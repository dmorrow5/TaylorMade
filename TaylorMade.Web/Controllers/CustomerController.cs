using System;
using Microsoft.AspNetCore.Mvc;
using TaylorMade.Data.Models;
using TaylorMade.Web.Api.Controllers;

namespace TaylorMade.Web.Controllers
{
    [ApiController]
    public class CustomerController : RestfullApiController<Customer, Guid, CustomerDto, TaylorMadeContext>
    {
        public CustomerController(TaylorMadeContext dbContext) : base(dbContext)
        {
        }
    }
}
