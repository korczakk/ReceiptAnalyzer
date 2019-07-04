using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;

using Newtonsoft.Json;
using Microsoft.Extensions.Configuration;
using DataAccessAPI.Model;

namespace DataAccessAPI
{
  public static class GetStores
  {
    [FunctionName("GetStores")]
    public static async Task<HttpResponseMessage> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
        ILogger log,
        ExecutionContext context)
    {
      string cn = GetConnectionString(context);
      if (cn == null)
        throw new System.Exception("Connection string is empty.");

      var account = CloudStorageAccount.Parse(cn);

      var tableClient = account.CreateCloudTableClient();
      var table = tableClient.GetTableReference("Stores");

      TableQuerySegment<Store> result = await table.ExecuteQuerySegmentedAsync<Store>(new TableQuery<Store>(), null);

      return new HttpResponseMessage(HttpStatusCode.OK)
      {
        Content = new StringContent(JsonConvert.SerializeObject(result.Results.ToList()))
      };
    }

    static private string GetConnectionString(ExecutionContext context)
    {
      var config = new ConfigurationBuilder()
        .SetBasePath(context.FunctionAppDirectory)
        .AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)
        .AddEnvironmentVariables()
        .Build();

      return config.GetConnectionString("default");
    }
  }
}
