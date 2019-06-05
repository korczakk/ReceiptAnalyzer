using System;
using System.Collections.Generic;
using System.Text;

namespace ImageUploadFunction
{
  public class ImageFile
  {
    public string FileContent { get; set; }
    public string FileType { get; set; }

    public byte[] GetByteArray()
    {
      //convert from Base64 to file
      return Convert.FromBase64String(this.FileContent);
    }

    public string GetExtension()
    {
      return this.FileType.Substring(this.FileType.IndexOf('/')+1);
    }
  }
}
