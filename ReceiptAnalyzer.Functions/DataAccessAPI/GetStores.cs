using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Text;

using DataAccessAPI.Entities;

using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

using Microsoft.WindowsAzure.Storage.Table;

using Newtonsoft.Json;
using DataAccessAPI.Model;
using DataAccessAPI.Repository;

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
        return new HttpResponseMessage(HttpStatusCode.InternalServerError)
        {
          Content = new StringContent("Incorrect connection string to Azure Storage Account.")
        };

      IRepository<StoreEntity> repository = new Repository<StoreEntity>(cn);
      TableQuerySegment<StoreEntity> result = await repository.GetAll<StoreEntity>("Stores");

      List<Store> stores = result.Results.Select(s => new Store()
      {
        StoreName = s.StoreName,
        RowKey = s.RowKey
      }).ToList();

      return new HttpResponseMessage(HttpStatusCode.OK)
      {
        Content = new StringContent(JsonConvert.SerializeObject(stores), Encoding.UTF8, "application/json")
      };
    }
  }
}
