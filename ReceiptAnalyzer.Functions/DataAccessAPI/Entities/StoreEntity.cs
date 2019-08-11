using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;

using System.Collections.Generic;
using System.Linq;

namespace DataAccessAPI.Entities
{
  public class StoreEntity : TableEntity
  {
    public string StoreName { get; set; }

    public new void ReadEntity(IDictionary<string, EntityProperty> properties, OperationContext operationContext)
    {
      StoreName = properties.Values.SingleOrDefault().StringValue;
    }
  }
}
