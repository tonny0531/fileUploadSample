using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.GridFS;

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
        public ActionResult<string> Upload(IFormFile file)
        {
            var uploads = _folder;
            if (!Directory.Exists(uploads))
            {
                Directory.CreateDirectory(uploads);
            }

            var client = new MongoClient("mongodb://localhost:27017");
            IMongoDatabase db = client.GetDatabase("TestCol");
            GridFSBucket bucket = new GridFSBucket(db);
            ObjectId id = bucket.UploadFromStream(file.FileName, file.OpenReadStream());
            return Ok(id.ToString());
        }


        [HttpGet("{id}")]
        public IActionResult Download(string id)
        {
            try
            {
                var client = new MongoClient("mongodb://localhost:27017");
                IMongoDatabase db = client.GetDatabase("TestCol");
                GridFSBucket bucket = new GridFSBucket(db);
                byte[] file = bucket.DownloadAsBytes(ObjectId.Parse(id));

                Stream stream = new MemoryStream();
                bucket.DownloadToStream(ObjectId.Parse(id), stream);
                stream.Position = 0;

                return File(stream, "image/png");
            }
            catch (Exception ex)
            {
                throw;
            }
            
        }
    }
}