using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DataAccessAPI.Model
{
  public class Store : ITableEntity
  {
    public string StoreName { get; set; }
    public string PartitionKey { get ; set ; }
    public string RowKey { get; set ; }
    public DateTimeOffset Timestamp { get ; set ; }
    public string ETag { get ; set ; }

    public void ReadEntity(IDictionary<string, EntityProperty> properties, OperationContext operationContext)
    {
      StoreName = properties.Values.SingleOrDefault().StringValue;
    }

    public IDictionary<string, EntityProperty> WriteEntity(OperationContext operationContext)
    {
      throw new NotImplementedException();
    }
  }
}
