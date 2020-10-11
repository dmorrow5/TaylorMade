using System;
using Microsoft.AspNetCore.Mvc;
using TaylorMade.Data.Models;
using TaylorMade.Web.Api.Controllers;

namespace TaylorMade.Web.Controllers
{
    [ApiController]
    public class EquipmentController : RestfullApiController<Equipment, Guid, EquipmentDto, TaylorMadeContext>
    {
        public EquipmentController(TaylorMadeContext dbContext) : base(dbContext)
        {
        }
    }
}
