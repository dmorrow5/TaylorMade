using System;
using Microsoft.AspNetCore.Mvc;
using TaylorMade.Data.Models;
using TaylorMade.Web.Api.Controllers;

namespace TaylorMade.Web.Controllers
{
    [ApiController]
    public class ProjectController : RestfullApiController<Project, Guid, ProjectDto, TaylorMadeContext>
    {
        public ProjectController(TaylorMadeContext dbContext) : base(dbContext)
        {
        }
    }
}
