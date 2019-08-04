using System;
using System.Collections.Generic;
using System.Linq;

using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;

using Newtonsoft.Json;

namespace DataAccessAPI.Model
{
  public class ReceiptItem
  {
    public string ProductName { get; set; }
    public double ProductsQuantity { get; set; }
    public double ProductPrice { get; set; }
    public ProductCategory ProductCategory { get; set; }
  }
}
