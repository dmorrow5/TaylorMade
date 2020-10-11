using System;
using TaylorMade.Web.Api;

namespace TaylorMade.Data.Models
{
    public partial class EquipmentProjectTypes : IKeyed<Guid>
    {
        
    }

    public partial class EquipmentProjectTypesDto : DtoForEntity<EquipmentProjectTypes, Guid>
    {
    }
}
