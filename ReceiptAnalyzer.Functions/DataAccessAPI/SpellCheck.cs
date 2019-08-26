using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

using DataAccessAPI.Model;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.CognitiveServices.Language.SpellCheck;
using Microsoft.Azure.CognitiveServices.Language.SpellCheck.Models;
using Microsoft.Extensions.Logging;

using Newtonsoft.Json;

namespace DataAccessAPI
{
  public static class SpellCheck
  {
    static SpellCheckClient spellCheckClient;

    [FunctionName("SpellCheck")]
    public static async Task<IActionResult> Run(
      [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)]
      HttpRequest req,
      ILogger log,
      ExecutionContext context)
    {
      log.LogInformation("SpellCheck function is starting.");

      string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
      Dictionary<string, string> data =
        JsonConvert.DeserializeObject<Dictionary<string, string>>(requestBody);

      if (data == null)
        return new BadRequestObjectResult("Brak danych do analizy.");

      string cognitiveServiceKey = StorageHelper.GetEnvironmentVariable("CognitiveServiceKey", context);

      if (string.IsNullOrEmpty(cognitiveServiceKey))
        return new BadRequestObjectResult("Brak klucza do usługi Bing Spell Check.");

      spellCheckClient = new SpellCheckClient(new ApiKeyServiceClientCredentials(cognitiveServiceKey));

      //Updates each row with spelling check results
      var checkResults = await CheckSpelling(data);

      return (ActionResult)new OkObjectResult(JsonConvert.SerializeObject(checkResults));
    }

    private static async Task<List<SpellingCheckResult>> CheckSpelling(Dictionary<string, string> textsToCheck)
    {
      List<SpellingCheckResult> result = new List<SpellingCheckResult>();

      foreach (var text in textsToCheck)
      {
        var response = await spellCheckClient.SpellCheckerWithHttpMessagesAsync(
          text: text.Value,
          market: "pl-PL",
          mode: "spell");

        if (response.Body.FlaggedTokens.Count == 0)
          continue;

        result.Add(new SpellingCheckResult
        {
          RowKey = text.Key,
          SpellingFlaggedToken = response.Body.FlaggedTokens
        });
      }

      return result;
    }
  }
}
