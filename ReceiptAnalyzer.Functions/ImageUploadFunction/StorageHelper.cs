using Microsoft.Extensions.Configuration;
using Microsoft.Azure.WebJobs;
using Microsoft.WindowsAzure.Storage.Blob;

using Microsoft.WindowsAzure.Storage;


namespace ImageUploadFunction
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

    static public CloudBlobContainer GetBlobContainer(string connectionStringToContainer)
    {
      CloudStorageAccount account = CloudStorageAccount.Parse(connectionStringToContainer);
      CloudBlobClient blobClient = account.CreateCloudBlobClient();
      CloudBlobContainer container = blobClient.GetContainerReference("receiptimages");

      return container;
    }
  }
}
