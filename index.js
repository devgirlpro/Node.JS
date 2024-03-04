function greet(name) {
    console.log(`Hello ${name}`)
}


//greet('John')

function higherOrderFunction(callback) {
    const name = 'John';
    callback(name);
}

higherOrderFunction(greet)