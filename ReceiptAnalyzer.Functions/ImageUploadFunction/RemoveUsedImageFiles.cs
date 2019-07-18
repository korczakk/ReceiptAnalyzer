using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Reflection.Metadata;

using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage.Blob;

namespace ImageUploadFunction
{
  public static class RemoveUsedImageFiles
  {
    [FunctionName("RemoveUsedImageFiles")]
    public static async Task Run([TimerTrigger("0 0 22 * * *")]TimerInfo myTimer,
      ILogger log,
      Microsoft.Azure.WebJobs.ExecutionContext context)
    {
      log.LogInformation($"C# Timer trigger function executed at: {DateTime.Now}");

      string cn = StorageHelper.GetConnectionString(context);

      if (cn == null)
        throw new Exception("Connection string is invalide.");

      CloudBlobContainer container = StorageHelper.GetBlobContainer(cn);
      await container.DeleteIfExistsAsync();
    }
  }
}
