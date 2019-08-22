using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessAPI.Model
{
  public class SpellCheckContent
  {
    public string Text { get; set; }
    public List<string> SuggestedCorrection { get; set; }
  }
}
