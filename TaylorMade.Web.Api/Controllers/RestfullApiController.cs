using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace TaylorMade.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestfullApiController<TEntity, TKey, TDto, TContext> : DatabaseController<TContext>
        where TEntity : class, IKeyed<TKey>, new()
        where TDto : DtoForEntity<TEntity, TKey>, new()
        where TContext : DbContext
    {
        private DbSet<TEntity> DbSet;

        public RestfullApiController(TContext dbContext) : base(dbContext)
        {
            DbSet = dbContext.Set<TEntity>();
        }

        [HttpGet]
        public async Task<ActionResult<TEntity>> Get()
        {
            try
            {
                var entities = await DbSet.ToArrayAsync();

                return Ok(EntitiesToDto(entities));
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<ActionResult<TEntity>> Post([FromBody]TDto dto)
        {
            try
            {
                if (dto == null)
                {
                    return BadRequest();
                }

                var entity = new TEntity();
                AddEntity(entity, dto);

                DbSet.Add(entity);
                await _dbContext.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(Guid id, TDto dto)
        {
            try
            {
                if (dto == null)
                {
                    return BadRequest();
                }

                var entity = await DbSet.FindAsync(id);
                if (entity == null)
                {
                    return null;
                }

                return await OnPutAsync(entity, dto);
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(Guid id)
        {
            try
            {
                var entity = await DbSet.FindAsync(id);
                if (entity == null)
                {
                    return NotFound();
                }

                DbSet.Remove(entity);
                await _dbContext.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        private TDto[] EntitiesToDto(TEntity[] entities)
        {
            return entities.Select(e => EntityToDto(e)).ToArray();
        }

        private TDto EntityToDto(TEntity entity)
        {
            return EntityExtensions<TEntity, TKey, TDto>.AsDto(entity);
        }
        
        private void AddEntity(TEntity entity, TDto dto)
        {
            EntityExtensions<TEntity, TKey, TDto>.CopyToEntity(entity, dto);
            AsignKey(entity);
            DbSet.Add(entity);
        }

        private void AsignKey(TEntity entity)
        {
            if (entity.Id is Guid)
            {
                if ((entity.Id as Guid?) == Guid.Empty)
                {
                    entity.Id = (TKey)(object)Guid.NewGuid();
                }
            }
        }

        private async Task<ActionResult> OnPutAsync(TEntity entity, TDto dto)
        {
            EntityExtensions<TEntity, TKey, TDto>.CopyToEntity(entity, dto);
            _dbContext.Entry(entity).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
            return Ok(dto);
        }

    }
}
