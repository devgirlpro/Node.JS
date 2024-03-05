const fs = require("node:fs");


console.log("first")

//reading file synchronously
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log("synchronously =>", fileContents);

console.log("second")

//error first callback pattern, reading file asynchronously
fs.readFile("./file.txt", "utf-8", (error, data) => {
    if(error) {
        console.log(error)
    } else {
        console.log("asynchronously =>", data)
    }
})

console.log("thired")


//synchronously write in a file
fs.writeFileSync("./great.txt", "Hello World!")

//asynchronously write in a file
// fs.writeFile("./great.txt", "Hello again", (err) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log("File written")
//     }
// })


//add { flag: "a" } to nor rewrite the previeus text
fs.writeFile("./great.txt", " Hello again", { flag: "a" }, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("File written")
    }
})