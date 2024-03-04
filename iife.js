(function (message) {
    const superHero = 'Batman';
    console.log(message, superHero)
})('Hello');

(function (message) {
    const superHero = 'Superman';
    console.log(message, superHero)
})('Goodbye');

//every module in node.js gets wrapped in an IIFE before being loaded

// IIFE helps keep top-level variables scoped to the module rather than 
// the gloal object