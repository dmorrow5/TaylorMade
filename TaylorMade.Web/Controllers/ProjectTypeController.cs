using System;
using Microsoft.AspNetCore.Mvc;
using TaylorMade.Data.Models;
using TaylorMade.Web.Api.Controllers;

namespace TaylorMade.Web.Controllers
{
    [ApiController]
    public class ProjectTypeController : RestfullApiController<ProjectType, Guid, ProjectTypeDto, TaylorMadeContext>
    {
        public ProjectTypeController(TaylorMadeContext dbContext) : base(dbContext)
        {
        }
    }
}
