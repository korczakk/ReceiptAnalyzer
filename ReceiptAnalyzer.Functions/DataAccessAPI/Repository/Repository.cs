using System.Threading.Tasks;

using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;

namespace DataAccessAPI.Repository
{
  public class Repository<T> : IRepository<T> where T : ITableEntity, new()
  {
    readonly string connectionString;

    public Repository(string connectionString)
    {
      this.connectionString = connectionString;
    }

    public async Task<TableQuerySegment<T>> GetAll<T>(string tableName) where T : ITableEntity, new()
    {
      var account = CloudStorageAccount.Parse(connectionString);

      var tableClient = account.CreateCloudTableClient();
      var table = tableClient.GetTableReference(tableName);

      TableQuerySegment<T> result = await table.ExecuteQuerySegmentedAsync<T>(new TableQuery<T>(), null);

      return result;
    }

    public async Task AddEntity<T>(T entity, string tableName) where T : ITableEntity, new()
    {
      var account = CloudStorageAccount.Parse(connectionString);
      var tableClient = account.CreateCloudTableClient();
      var table = tableClient.GetTableReference(tableName);

      await table.ExecuteAsync(TableOperation.Insert(entity));
    }
  }
}
