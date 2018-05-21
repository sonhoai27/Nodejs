var { readFile, writeFile } = require("./module")

var fs = require("fs")

// readFile("./a.txt").then(res => console.log(res.toString())).catch(err => console.log(err))
// writeFile("./a.txt", "SON NGUYEN").then(res => console.log(res)).catch(err => console.log(err))

// var buf = new Buffer("KDNDKNDD")
// var buf2 = new Buffer("KDNDKNDD")

// console.log(Buffer.concat([buf, buf2]))

var readStream = fs.createReadStream('a.txt')
var data = ''
readStream.on("data", (res) => {
    data += res
})

readStream.on('end', () => {
    console.log(data)
})
readStream.on('error', (error) => {
    console.log(error)
})