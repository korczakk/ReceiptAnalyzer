using System;
using System.IO;
using System.Threading.Tasks;

using DataAccessAPI.Entities;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using DataAccessAPI.Model;
using DataAccessAPI.Repository;

namespace DataAccessAPI
{
  public static class CreateNewReceipt
  {
    [FunctionName("CreateNewReceipt")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
        ILogger log,
        ExecutionContext context)
    {
      log.LogInformation("CreateNewReceipt function has been invoked.");

      string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
      Receipt receipt = JsonConvert.DeserializeObject<Receipt>(requestBody);

      receipt.RowKey = Guid.NewGuid().ToString();

      string cn = StorageHelper.GetConnectionString(context);

      IRepository<ReceiptEntity> repository = new Repository<ReceiptEntity>(cn);
      await repository.AddEntity<ReceiptEntity>(receipt.ToTableEntity(), "Receipts");

      return new CreatedResult("", receipt);

    }
  }
}
