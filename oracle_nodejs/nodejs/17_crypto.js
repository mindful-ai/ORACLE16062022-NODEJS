var crypto = require('crypto');

var key = crypto.createCipher('aes-128-cbc', 'somepassword');

// ----------------------------------


var encryptedData = key.update('Test String!!!', 'utf-8', 'hex');
encryptedData += key.final('hex');

console.log(encryptedData);


var key = crypto.createDecipher('aes-128-cbc', 'somepassword');
var decryptedData = key.update('f3583907be9200c0be00c5bc2dd7e2ea', 'hex', 'utf-8');
decryptedData += key.final('utf-8');

console.log(decryptedData);