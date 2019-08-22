using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

using DataAccessAPI.Model;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.CognitiveServices.Language.SpellCheck;
using Microsoft.Azure.CognitiveServices.Language.SpellCheck.Models;
using Microsoft.Extensions.Logging;
using Microsoft.Rest;

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
      Dictionary<string, SpellCheckContent> data =
        JsonConvert.DeserializeObject<Dictionary<string, SpellCheckContent>>(requestBody);

      if(data == null)
        return new BadRequestObjectResult("Brak danych do analizy.");
      
      string cognitiveServiceKey = StorageHelper.GetEnvironmentVariable("CognitiveServiceKey", context);

      if (string.IsNullOrEmpty(cognitiveServiceKey))
        return new BadRequestObjectResult("Brak klucza do usługi Bing Spell Check.");

      spellCheckClient = new SpellCheckClient(new ApiKeyServiceClientCredentials("97317aecbf0048879b3f65f91d5f63cc"));

      //Updates each row with spelling check results
      await UpdateWithCheckResults(data);

      return (ActionResult)new OkObjectResult(JsonConvert.SerializeObject(data));
    }

    private static async Task UpdateWithCheckResults(Dictionary<string, SpellCheckContent> inputsToCheck)
    {
      foreach (var singleInput in inputsToCheck)
      {
        List<string> suggestions = await GetResultsFromSpellingApi(singleInput.Value.Text);

        inputsToCheck[singleInput.Key].SuggestedCorrection = suggestions;
      }
    }

    private static async Task<List<string>> GetResultsFromSpellingApi(string text)
    {
      var response = await spellCheckClient.SpellCheckerWithHttpMessagesAsync(
        text: text,
        market: "pl-PL",
        mode: "spell");

      if (response.Body.FlaggedTokens.Count == 0)
        return new List<string>();

      var flattern = response.Body.FlaggedTokens.SelectMany(x => x.Suggestions).ToList();

      return flattern.Select(x => x.Suggestion).ToList();
    }
  }
}
