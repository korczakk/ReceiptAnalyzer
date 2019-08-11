using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace DataAccessAPI.Model
{
  [JsonObject(NamingStrategyType = typeof(CamelCaseNamingStrategy))]
  public class ProductCategory
  {
    public string CategoryName { get; set; }
    public string RowKey { get; set; }
  }
}
