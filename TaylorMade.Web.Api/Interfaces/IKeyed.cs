namespace TaylorMade.Web.Api
{
    public interface IKeyed<T>
    {
        T Id { get; set; }
    }
}
