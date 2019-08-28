using System;
using System.Collections.Generic;
using System.Text;

using Microsoft.WindowsAzure.Storage.Table;

namespace DataAccessAPI.Entities
{
  public interface ITableEntityConvertable<T> where T : TableEntity
  {
    T ToTableEntity();
  }
}
