var fs = require('fs');

fs.readFile('testfile.txt', function(err, data){
    if(err) throw err;
    console.log(data.toString());
})

fs.writeFile('testfile_wr.txt', 'This is a write test', function(err){
    if(err) { console.log(err); }
    else {console.log('File write complete!')}

})