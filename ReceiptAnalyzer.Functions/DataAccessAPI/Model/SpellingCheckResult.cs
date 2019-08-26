using System;
using System.Collections.Generic;
using System.Text;

using Microsoft.Azure.CognitiveServices.Language.SpellCheck.Models;

using Newtonsoft.Json;

namespace DataAccessAPI.Model
{
  public class SpellingCheckResult
  {
    [JsonProperty(PropertyName = "rowKey")]
    public string RowKey { get; set; }

    [JsonProperty(PropertyName = "spellingFlaggedToken")]
    public IList<SpellingFlaggedToken> SpellingFlaggedToken { get; set; }
  }
}
