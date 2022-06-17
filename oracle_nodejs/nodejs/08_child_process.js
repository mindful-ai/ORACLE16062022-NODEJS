const fs = require('fs');
const child_process = require('child_process');

for(i = 0; i < 3; i++){
    var workerProcess = child_process.exec('node support.js ' + i, function(error, stdout, stderr){
        if(error){
            console.log('Error Code --> ' + error.code);
        }
        console.log('STDOUT --> ' + stdout);
        console.log('STDERR --> ' + stderr);
    
    })
    workerProcess.on('exit', function(code){
        console.log("Child process exited with code " + code)
    })

}
