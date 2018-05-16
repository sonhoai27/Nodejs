const express = require("express")
const fs = require("fs")

const app = express()
app.use(express.static("public"))

const port = process.env.PORT || 3000

// fs.readFile("./public/hello.txt", { encoding: 'utf8' }, (err, content) => {
//     if (err) return console.log(err)
//     console.log(content)
// })
fs.readdir("./public/", (err, files) => {
    if (err) return console.log(err)

    console.log(files)
})
app.listen(port)