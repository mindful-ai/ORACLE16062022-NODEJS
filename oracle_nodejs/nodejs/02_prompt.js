// npm init
// npm install prompt

const prompt = require("prompt");

var username, email;

prompt.start();

prompt.get(['user', 'mail'], function(err, result){
    if(err) { return 1; }
    username = result.user;
    email = result.mail
})

