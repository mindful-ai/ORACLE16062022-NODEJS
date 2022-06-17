var fs = require('fs');

fs.readFile('testfile.txt', 'utf-8', function(err, data){

    debugger;
    if(err) throw err;
    console.log(data);

})