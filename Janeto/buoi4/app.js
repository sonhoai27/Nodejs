var { readFile, writeFile, getInfoFile } = require("./module")
var buf = new Buffer(255)
    // var os = require('os');

// console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.freemem())

var fs = require("fs")

// // readFile("./a.txt").then(res => console.log(res.toString())).catch(err => console.log(err))
// // writeFile("./a.txt", "SON NGUYEN").then(res => console.log(res)).catch(err => console.log(err))

// // var buf = new Buffer("KDNDKNDD")
// // var buf2 = new Buffer("KDNDKNDD")

// // console.log(Buffer.concat([buf, buf2]))

// var readStream = fs.createReadStream('a.txt')
// var data = ''
// readStream.on("data", (res) => {
//     // if (data.length < 1) {
//     //     console.log(res.toString())
//     // }
//     data += res
// })

// readStream.on('end', () => {
//     console.log(data)
// })
// readStream.on('error', (error) => {
//     console.log(error)
// })

// getInfoFile("a.txt")

fs.open("a.txt", 'r+', (err, fd) => {
    if (err) console.log(err)
    else {
        fs.read(fd, buf, 0, buf.length, 1, (error, res) => {
            if (error) console.log(error)
            console.log(buf.slice(0, res).toString())
        })
    }
})