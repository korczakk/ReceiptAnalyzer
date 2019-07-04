using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

using Microsoft.WindowsAzure.Storage.Table;

using Newtonsoft.Json;
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
      string cn = StorageHelper.GetConnectionString(context);
      if (cn == null)
        throw new System.Exception("Connection string is empty.");

      TableQuerySegment<Store> result = await StorageHelper.GetDataFromTable<Store>("Stores", cn);

      return new HttpResponseMessage(HttpStatusCode.OK)
      {
        Content = new StringContent(JsonConvert.SerializeObject(result.Results.ToList()))
      };
    }
  }
}
