using System;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Configuration;
using Microsoft.Azure.WebJobs;
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

    static public string GetEnvironmentVariable(string variableName, ExecutionContext context)
    {
      var config = new ConfigurationBuilder()
        .SetBasePath(context.FunctionAppDirectory)
        .AddJsonFile("local.settings.json", optional: true)
        .AddEnvironmentVariables()
        .Build();

      return config[variableName];
    }
  }
}
