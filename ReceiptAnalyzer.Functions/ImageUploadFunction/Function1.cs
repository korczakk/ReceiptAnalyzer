using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage;

using Newtonsoft.Json;

namespace ImageUploadFunction
{
    public static class Function1
    {
        [FunctionName("AddImageFile")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            ImageFile data = JsonConvert.DeserializeObject<ImageFile>(requestBody);

            //convert from Base64 to file
            byte[] bytes = Convert.FromBase64String(data.FileContent);

            //store in Azure Blob


            return new OkObjectResult("OK");
        }

        static private Uri UploadFileToStorage(byte[] bytes)
        {
          CloudStorageAccount storageAccount = CloudStorageAccount.Parse("");

          return new Uri("");
        }
    }
}
