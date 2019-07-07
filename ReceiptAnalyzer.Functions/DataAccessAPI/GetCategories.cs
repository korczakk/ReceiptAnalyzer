using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Net.Http;
using System.Net;
using Microsoft.WindowsAzure.Storage.Table;
using DataAccessAPI.Model;
using System.Linq;
using System.Text;

namespace DataAccessAPI
{
  public static class GetCategories
  {
    [FunctionName("GetCategories")]
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

      TableQuerySegment<ProductCategory> result = await StorageHelper.GetDataFromTable<ProductCategory>("Categories", cn);

      return new HttpResponseMessage(HttpStatusCode.OK)
      {
        Content = new StringContent(JsonConvert.SerializeObject(result.Results.ToList()), Encoding.UTF8, "application/json")
      };
    }
  }
}
