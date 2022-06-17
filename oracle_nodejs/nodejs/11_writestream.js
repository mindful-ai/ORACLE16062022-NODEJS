var fs = require('fs');
var data = "This data tests the write streaming...\n"

var writerStream = fs.createWriteStream("output.txt");
writerStream.write(data, "utf-8");
writerStream.write(data, "utf-8");
writerStream.write(data, "utf-8");
writerStream.end()

writerStream.on("finish", function(){
    console.log("Writing finished!");
})

writerStream.on("error", function(err){
    console.log("ERROR " + err.stack);
})