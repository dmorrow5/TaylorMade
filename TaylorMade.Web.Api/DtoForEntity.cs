namespace TaylorMade.Web.Api
{
    public class DtoForEntity<TEntity, TKey> where TEntity : class, IKeyed<TKey>, new()
    {
        public TKey Id { get; set; }
    }
}
