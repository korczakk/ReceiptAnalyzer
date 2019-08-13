using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

using DataAccessAPI.Model;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace DataAccessAPI
{
    public static class SpellCheck
    {
        [FunctionName("SpellCheck")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("SpellCheck function is starting.");
      
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            List<SpellCheckContent> data = JsonConvert.DeserializeObject<List<SpellCheckContent>>(requestBody);
      
            return (ActionResult)new OkObjectResult("");
        }
    }
}
