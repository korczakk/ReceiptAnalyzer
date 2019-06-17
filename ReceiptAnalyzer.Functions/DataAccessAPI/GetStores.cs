using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage.Auth;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using DataAccessAPI.Model;

namespace DataAccessAPI
{
  public static class GetStores
  {
    [FunctionName("GetStores")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
        ILogger log)
    {
      log.LogInformation("C# HTTP trigger function processed a request.");

      string accountName = req.Query["accountname"];
      string key = req.Query["key"];
      TableQuerySegment<Store> result;
      try
      {
        var credentials = new StorageCredentials(accountName, key);
        var account = new CloudStorageAccount(credentials, true);
        var tableClient = account.CreateCloudTableClient();
        var table = tableClient.GetTableReference("Stores");
         result = await table.ExecuteQuerySegmentedAsync<Store>(new TableQuery<Store>(), null);

      }
      catch (System.Exception e)
      {

        throw e;
      }

      return new OkObjectResult(result.Results);
    }
  }
}
