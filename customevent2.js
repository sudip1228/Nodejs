const events=require("events");
const event= new events.EventEmitter();

const first_event=function(n1,n2){
    console.log(n1*n2);
    event.emit('click2',);//triggering the second events
}

const second_event=function(){
    console.log("2nd triggered");
}

event.on('click2',second_event);//creating event
event.on('click',first_event);//triggering the 1st event

event.emit('click',4,5);