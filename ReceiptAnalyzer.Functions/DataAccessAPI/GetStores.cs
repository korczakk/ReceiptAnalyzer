using System;
using System.Linq;
using System.Net;
using System.Net.Http;
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

using Microsoft.Extensions.Primitives;

using Newtonsoft.Json;

namespace DataAccessAPI
{
  public static class GetStores
  {
    [FunctionName("GetStores")]
    public static async Task<HttpResponseMessage> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
        ILogger log)
    {

      var account = CloudStorageAccount.Parse(
        "DefaultEndpointsProtocol=https;AccountName=receiptanalyzerstore;AccountKey=zFhG+sVVhi/H5qqxvmAbqEvhfkPLQ6Q8VomcTuvNMy9+FlIkMI4SaAycV5urs6bsKxEX+1qsw03ardOwjXdrNQ==;EndpointSuffix=core.windows.net");

      var tableClient = account.CreateCloudTableClient();
      var table = tableClient.GetTableReference("Stores");

      TableQuerySegment result = await table.ExecuteQuerySegmentedAsync(new TableQuery(), null);
      

      return new HttpResponseMessage(HttpStatusCode.OK)
      {
        Content = new StringContent(JsonConvert.SerializeObject(result.Results.ToList()))
      };
    }
  }
}
