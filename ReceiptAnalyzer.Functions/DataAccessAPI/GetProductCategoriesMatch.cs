using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using DataAccessAPI.Entities;
using DataAccessAPI.Model;
using DataAccessAPI.Repository;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace DataAccessAPI
{
  public static class GetProductCategoriesMatch
  {
    static string cn;

    [FunctionName("GetProductCategoriesMatch")]
    public static async Task<IActionResult> Run(
          [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
          ILogger log,
          ExecutionContext context)
    {
      log.LogInformation("Starting function 'GetProductCategoriesMatch'");

      cn = StorageHelper.GetConnectionString(context);
      if (cn == null)
        return (ActionResult)new BadRequestObjectResult("Brak connection string.");

      List<ReceiptItem> receiptItems = await GetAllItems();
      var productsWithGroupedCategories = receiptItems.GroupBy(k => k.ProductName)
        .Select(x => new
        {
          ProductName = x.Key,
          GroupedCategories = x.GroupBy(c => c.ProductCategory.CategoryName)
            .Select(c => new
            {
              CategoryName = c.Key,
              NumberOfCategories = c.Count()
            })
              .OrderByDescending(o => o.NumberOfCategories)
              .ToList()
        })
        .ToList();


      return (ActionResult)new OkObjectResult(JsonConvert.SerializeObject(productsWithGroupedCategories));
    }

    private static async Task<List<ReceiptItem>> GetAllItems()
    {
      Repository<ReceiptItemEntity> repo = new Repository<ReceiptItemEntity>(cn);
      var segmentedResult = await repo.GetAll<ReceiptEntity>("Receipts");

      var receipts = segmentedResult.Results.Select(
          x => new Receipt
          {
            Items = JsonConvert.DeserializeObject<List<ReceiptItem>>(x.Items)
          })
        .ToList();

      var receiptItems = receipts.SelectMany(src => src.Items).ToList();

      return receiptItems;
    }
  }
}
