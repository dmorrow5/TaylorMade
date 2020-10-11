using System;
using Microsoft.AspNetCore.Mvc;
using TaylorMade.Data.Models;
using TaylorMade.Web.Api.Controllers;

namespace TaylorMade.Web.Controllers
{
    [ApiController]
    public class MaterialController : RestfullApiController<Material, Guid, MaterialDto, TaylorMadeContext>
    {
        public MaterialController(TaylorMadeContext dbContext) : base(dbContext)
        {
        }
    }
}
