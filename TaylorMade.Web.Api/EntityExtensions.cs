
namespace TaylorMade.Web.Api
{
    public static class EntityExtensions<TEntity, TKey, TDto>
        where TEntity : class, IKeyed<TKey>, new()
        where TDto : DtoForEntity<TEntity, TKey>, new()
    {
        public static TDto AsDto(TEntity entity)
        {
            if (entity == null)
            {
                return null;
            }

            var dto = new TDto();
            CopyToDto(entity, dto);
            return dto;
        }

            public static void CopyToDto(TEntity entity, TDto dto)
        {
            var entityProperties = entity.GetType().GetProperties();
            var dtoProperties = dto.GetType().GetProperties();

            foreach (var entityProperty in entityProperties)
            {
                foreach (var dtoProperty in dtoProperties)
                {
                    if (entityProperty.Name == dtoProperty.Name && entityProperty.PropertyType == dtoProperty.PropertyType)
                    {
                        dtoProperty.SetValue(dto, entityProperty.GetValue(entity));
                        break;
                    }
                }
            }
        }

        public static void CopyToEntity(TEntity entity, TDto dto)
        {
            var entityProperties = entity.GetType().GetProperties();
            var dtoProperties = dto.GetType().GetProperties();

            foreach (var dtoProperty in dtoProperties)
            {
                foreach (var entityProperty in entityProperties)
                {
                    if (dtoProperty.Name == entityProperty.Name && dtoProperty.PropertyType == entityProperty.PropertyType)
                    {
                        entityProperty.SetValue(entity, dtoProperty.GetValue(dto));
                        break;
                    }
                }
            }
        }
    }
}
