using System;
using System.Collections.Generic;
using System.Text;

using Microsoft.WindowsAzure.Storage.Table;

namespace DataAccessAPI.Entities
{
  public class ReceiptEntity : TableEntity
  {
    public string store { get; set; }
    public DateTime shoppingDate { get; set; }
    public double TotalAmount { get; set; }
    public string Items { get; set; }
  }
}
