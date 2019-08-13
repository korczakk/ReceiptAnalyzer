using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessAPI.Model
{
  public class SpellCheckContent
  {
    public string InputRowKey { get; set; }
    public string Text { get; set; }
    public string SuggestedCorrection { get; set; }
  }
}
