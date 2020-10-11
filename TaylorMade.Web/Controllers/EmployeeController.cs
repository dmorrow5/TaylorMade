using System;
using Microsoft.AspNetCore.Mvc;
using TaylorMade.Data.Models;
using TaylorMade.Web.Api.Controllers;

namespace TaylorMade.Web.Controllers
{
    [ApiController]
    public class EmployeeController : RestfullApiController<Employee, Guid, EmployeeDto, TaylorMadeContext>
    {
        public EmployeeController(TaylorMadeContext dbContext) : base(dbContext)
        {
        }
    }
}
