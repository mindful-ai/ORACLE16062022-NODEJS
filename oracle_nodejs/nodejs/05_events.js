var events = require('events');

var em = new events.EventEmitter();

em.on('firstEvent', function(data){
    console.log("Event object captured: " + data['item1']);
})

em.emit('firstEvent', {'item1':'This is some data'});