var http = require('http');
var formidable = require('formidable'); 
// Include the Formidable module to be able to parse the uploaded file once it reaches the server.
var fs = require('fs');
//When the file is uploaded and parsed, it gets placed on a temporary folder on your computer.
http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = "C:\\Users\\Purushotham\\Desktop\\oracle_nodejs\\node_js" + files.filetoupload.originalFilename;
      console.log('OLD ' + oldpath);
      console.log('NEW ' + newpath);
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);