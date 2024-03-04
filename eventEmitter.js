const EventEmitter = require("events");

const emitter = new EventEmitter();


//on method to ansver the event 
// emitter.on('order-Pizza', () => {
//     console.log(`Order recived! Backing a Pizza`);
// })

//emitter.emit("order-Pizza")


emitter.on('order-Pizza', (size, topping) => {
    console.log(`Order recived! Backing a  ${size} Pizza with a ${topping}`);
})
emitter.emit("order-Pizza", "large", "mushroom");