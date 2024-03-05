const EventEmitter = require("events");

const emitter = new EventEmitter();


//on method to ansver the event 
// emitter.on('order-pizza', () => {
//     console.log(`Order recived! Backing a Pizza`);
// })

//emitter.emit("order-pizza")


emitter.on('order-pizza', (size, topping) => {
    console.log(`Order recived! Backing a  ${size} Pizza with a ${topping}`);
});

emitter.on('order-pizza', (size) => {
    if(size === "large") {
        console.log('Serving complimentary drink');
    }
});


console.log("Do work before event occurs in the system")
emitter.emit("order-pizza", "large", "mushroom");