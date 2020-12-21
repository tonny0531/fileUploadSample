using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace UploadFile_Sample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        private readonly string _folder;
        public UploadController(IWebHostEnvironment WebHostEnvironment)
        {
            _folder = $"D:\\Test";
        }
        [HttpGet]
        public ActionResult<string> GetPath()
        {
            return Ok(_folder);
        }
        [HttpPost]
        public ActionResult Upload(IFormFile filekey)
        {
            var uploads = _folder;
            if (!Directory.Exists(uploads))
            {
                Directory.CreateDirectory(uploads);
            }
            //foreach (var f in file)
            {
                //if (f.Length > 0)
                {
                    var filePath = Path.Combine(uploads, filekey.FileName);
                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                    {
                        filekey.CopyToAsync(fileStream).Wait();
                    }
                }
            }
            return Ok();
        }


        //[HttpGet("{fileName}")]
        //public async Task<IActionResult> Download(string fileName)
        //{
        //    if (string.IsNullOrEmpty(fileName))
        //    {
        //        return NotFound();
        //    }

        //    var path = $@"{_folder}\{fileName}";
        //    var memoryStream = new MemoryStream();
        //    using (var stream = new FileStream(path, FileMode.Open))
        //    {
        //        await stream.CopyToAsync(memoryStream);
        //    }
        //    memoryStream.Seek(0, SeekOrigin.Begin);

        //    // 回傳檔案到 Client 需要附上 Content Type，否則瀏覽器會解析失敗。
        //    return new FileStreamResult(memoryStream, _contentTypes[Path.GetExtension(path).ToLowerInvariant()]);
        //}
    }
}
