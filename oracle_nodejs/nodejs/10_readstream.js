var fs = require('fs');
var receivedData = ""

var readerStream = fs.createReadStream('testfile.txt');
readerStream.setEncoding('utf-8');
readerStream.on("data", function(chunk){
    receivedData += chunk;
})
readerStream.on("end", function(){
    console.log(receivedData);
})
readerStream.on("error", function(err){
    console.log("ERROR " + err.stack)
})

console.log("Program closed!")
