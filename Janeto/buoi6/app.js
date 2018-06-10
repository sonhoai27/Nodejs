const express = require("express")
const bodyParser = require('body-parser')
const { readFile, writeFile } = require('./module')

const app = express()

var initNotes = []
const path = "note.json"

readFile(path + "")
    .then(data => {
        initNotes = JSON.parse(data)
    })
    .catch(err => console.log(err))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))


app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "this is my note.",
        status: 200
    })
})

app.get("/notes", (req, res, next) => {
    res.status(200).json({
        message: initNotes,
        status: 200
    })
})

app.get("/note/:id", (req, res, next) => {
    var { id } = req.params
    try {
        let note = initNotes.filter((n) => {
            return (n.id == id)
        })
        console.log(note)
        res.status(200).json({
            message: note,
            status: 200
        })
    } catch (e) {
        res.status(200).json({
            message: "ERROR",
            status: 200
        })
    }
})

app.post("/add", (req, res, next) => {
    var data = req.body
    initNotes = [...initNotes, data]
    writeFile(path, JSON.stringify(initNotes))
        .then(ok => {
            res.status(200).json({
                message: initNotes,
                status: 200
            })
        })
        .catch(err => {
            res.status(200).json({
                message: err,
                status: 200
            })
        })
})

app.put("/update/:id", (req, res, next) => {
    var { id } = req.params
    var data = req.body
    initNotes.filter((note) => {
        if (note.id == id) {
            note.Name = data.Name
            note.Content = data.Content
        }
    })
    writeFile(path, JSON.stringify(initNotes))
        .then(ok => {
            res.status(200).json({
                message: initNotes,
                status: 200
            })
        })
        .catch(err => {
            res.status(200).json({
                message: err,
                status: 200
            })
        })
})

app.delete("/delete/:id", (req, res, next) => {
    var { id } = req.params
    let notes = initNotes.filter((note) => {
        return (note.id != id)
    })
    initNotes = notes
    writeFile(path, JSON.stringify(initNotes))
        .then(ok => {
            res.status(200).json({
                message: initNotes,
                status: 200
            })
        })
        .catch(err => {
            res.status(200).json({
                message: err,
                status: 200
            })
        })

})

app.listen(3000)