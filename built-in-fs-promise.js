const fs = require("node:fs/promises");

console.log("first")


//async platform
fs.readFile("./file.txt", "utf-8")
    .then(data => console.log(data))
    .catch(er => console.log(err))


console.log("second")


//async await
async function readFile() {
    try {
        const data = await fs.readFile("./great.txt", "utf-8")
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

readFile()