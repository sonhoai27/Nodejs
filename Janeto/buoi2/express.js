var express = require("express")
var fs = require("fs")
var app = express()
app.get("/", (req, res)=> {
    fs.readFile("./input.txt", (err, out)=> {
        res.send(out.toString())
    })
})

app.listen(3000)