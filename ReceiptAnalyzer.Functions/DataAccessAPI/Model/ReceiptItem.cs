namespace DataAccessAPI.Model
{
  public class ReceiptItem
  {
    public string ProductName { get; set; }
    public double ProductsQuantity { get; set; }
    public double ProductPrice { get; set; }
    public ProductCategory ProductCategory { get; set; }
  }
}
