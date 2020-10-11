using Microsoft.EntityFrameworkCore;

namespace TaylorMade.Web.Api.Controllers
{
    public class DatabaseController<TContext> : ControllerBase
        where TContext : DbContext
    {
        #region Fields/Properties
        protected TContext _dbContext;
        #endregion

        #region Constructor
        public DatabaseController(TContext dbContext)
        {
            _dbContext = dbContext;
        }
        #endregion
    }
}
