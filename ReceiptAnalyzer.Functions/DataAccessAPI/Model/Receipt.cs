using System;
using System.Collections.Generic;
using System.Linq;

using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;

using Newtonsoft.Json;

namespace DataAccessAPI.Model
{
  public class Receipt : TableEntity
  {
    public Store store { get; set; }
    public DateTime shoppingDate { get; set; }
    public double TotalAmount { get; set; }
    public List<ReceiptItem> Items { get; set; }

    public new void ReadEntity(IDictionary<string, EntityProperty> properties, OperationContext operationContext)
    {
      if (properties.Values.SingleOrDefault().StringValue is string store)
      {
        this.store = JsonConvert.DeserializeObject<Store>(store);
      }

      this.shoppingDate = (DateTime) properties.Values.SingleOrDefault().DateTime;
      this.TotalAmount = (double) properties.Values.SingleOrDefault().DoubleValue;

      if (properties.Values.SingleOrDefault().StringValue is string items)
      {
        this.Items = (List<ReceiptItem>)JsonConvert.DeserializeObject<List<ReceiptItem>>(items);
      }
    }

    public new IDictionary<string, EntityProperty> WriteEntity(OperationContext operationContext)
    {
      EntityProperty store = EntityProperty.GeneratePropertyForString(JsonConvert.SerializeObject(this.store));

      var propertiesDictionary = new Dictionary<string, EntityProperty>();
      propertiesDictionary.Add("store", store);

      return propertiesDictionary;
    }
  }
}
