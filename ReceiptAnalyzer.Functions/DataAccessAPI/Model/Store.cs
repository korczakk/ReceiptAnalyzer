using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace DataAccessAPI.Model
{
  [JsonObject(NamingStrategyType = typeof(CamelCaseNamingStrategy))]
  public class Store
  {
    public string StoreName { get; set; }
    public string RowKey { get; set; }
  }
}
