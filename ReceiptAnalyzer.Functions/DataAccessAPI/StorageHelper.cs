using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

using Microsoft.Extensions.Configuration;
using Microsoft.Azure.WebJobs;
using Microsoft.Build.Utilities;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;


namespace DataAccessAPI
{
  public static class StorageHelper
  {
    static public string GetConnectionString(ExecutionContext context)
    {
      var config = new ConfigurationBuilder()
        .SetBasePath(context.FunctionAppDirectory)
        .AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)
        .AddEnvironmentVariables()
        .Build();

      return config.GetConnectionString("default");
    }

    static public async Task<TableQuerySegment<T>> GetDataFromTable<T>(string tableName, string cn) where T : ITableEntity, new()
    {
      var account = CloudStorageAccount.Parse(cn);

      var tableClient = account.CreateCloudTableClient();
      var table = tableClient.GetTableReference(tableName);

      TableQuerySegment<T> result = await table.ExecuteQuerySegmentedAsync<T>(new TableQuery<T>(), null);

      return result;
    }
  }
}
