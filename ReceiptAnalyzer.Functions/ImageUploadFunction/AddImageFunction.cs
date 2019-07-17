using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Auth;
using Microsoft.WindowsAzure.Storage.Blob;

using Newtonsoft.Json;

namespace ImageUploadFunction
{
    public static class Function1
    {
      static private ExecutionContext _context;
      static private ILogger _logger;

        [FunctionName("AddImageFile")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ILogger log,
            ExecutionContext context)
        {
            _context = context;
            _logger = log;

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            ImageFile file = JsonConvert.DeserializeObject<ImageFile>(requestBody);
          
            //store in Azure Blob
            string fileUri = await UploadFileToStorage(file);

            return new JsonResult(new {url = fileUri});
        }

        static private async Task<string> UploadFileToStorage(ImageFile file)
        {
          string cn = StorageHelper.GetConnectionString(_context);
           
          if (cn == null)
            throw new Exception("Connection string is empty.");

          CloudBlobContainer container = StorageHelper.GetBlobContainer(cn);

          await container.CreateIfNotExistsAsync(
            BlobContainerPublicAccessType.Blob,
            new BlobRequestOptions(),
            new OperationContext());

          CloudBlockBlob blob = container.GetBlockBlobReference($"{Guid.NewGuid().ToString()}.{file.GetExtension()}");
          blob.Properties.ContentType = file.FileType;

          byte[] bytes = file.GetByteArray();

          using (Stream stream = new MemoryStream(bytes))
          {
            await blob.UploadFromStreamAsync(stream);
          }

          return blob.Uri.AbsoluteUri;
        }


    }
}
