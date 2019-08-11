using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

using Microsoft.WindowsAzure.Storage.Table;

namespace DataAccessAPI.Repository
{
  public interface IRepository<T> where T : ITableEntity, new()
  {
    Task<TableQuerySegment<T>> GetAll<T>(string tableName) where T : ITableEntity, new();

    Task AddEntity<T>(T entity, string tableName) where T : ITableEntity, new();
  }
}
