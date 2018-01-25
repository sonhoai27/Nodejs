const express = require("express")

const app = express()
var admin = express.Router()
const port = process.env.PORT || 3000

const a = 20;
app.use("/public", express.static('public'))

app.use("/", (req, res, next) => {
    if (a == 21) {
        next('route')
    } else {
        next("admin")
    }
})

app.get("/", (req, res, next) => {
    res.send("AJAJA")
})

admin.get("/", admin, (req, res, next) => {
    res.send("admin")
})
app.listen(port)