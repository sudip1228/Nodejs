//create and trigger custom event in node.js
const events=require("events");
const event= new events.EventEmitter();

event.on('xyzclick',(n1,n2)=>console.log(n1*n2));//creating event
event.emit('xyzclick',4,5);//triggering the events



//following is jquery javascript event creation way
/*
$("#button").On('click',function(){

    console.log("event created");
})*/