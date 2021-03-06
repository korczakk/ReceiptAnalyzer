﻿using System;
using System.Collections.Generic;

using DataAccessAPI.Entities;

using Microsoft.WindowsAzure.Storage.Table;

using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace DataAccessAPI.Model
{
  [JsonObject(NamingStrategyType = typeof(CamelCaseNamingStrategy))]
  public class Receipt : ITableEntityConvertable<ReceiptEntity>
  {
    public Store Store { get; set; }
    public DateTime ShoppingDate { get; set; }
    public double TotalAmount { get; set; }
    public List<ReceiptItem> Items { get; set; }
    public string RowKey { get; set; }

    public ReceiptEntity ToTableEntity()
    {
      return new ReceiptEntity()
      {
        RowKey = this.RowKey,
        PartitionKey = this.Store.StoreName,
        store = JsonConvert.SerializeObject(this.Store),
        shoppingDate = this.ShoppingDate,
        TotalAmount = this.TotalAmount,
        Items = JsonConvert.SerializeObject(this.Items)
      };
    }
  }
}
