using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;

using System.Collections.Generic;
using System.Linq;

namespace DataAccessAPI.Entities
{
  public class ProductCategoryEntity : TableEntity
  {
    public string categoryName { get; set; }

    public new void ReadEntity(IDictionary<string, EntityProperty> properties, OperationContext operationContext)
    {
      this.categoryName = properties.Values.SingleOrDefault().StringValue;
    }
  }
}
