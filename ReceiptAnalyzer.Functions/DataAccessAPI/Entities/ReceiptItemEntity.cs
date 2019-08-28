using Microsoft.WindowsAzure.Storage.Table;

namespace DataAccessAPI.Entities
{
  public class ReceiptItemEntity : TableEntity
  {
    public string ProductName { get; set; }
    public double ProductsQuantity { get; set; }
    public double ProductPrice { get; set; }
    public string ProductCategory { get; set; }
  }
}
