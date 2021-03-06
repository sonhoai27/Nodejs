var fs = require("fs")

const readFile = (file) => {
    return new Promise((resolve, rejects) => {
        fs.readFile(file, (err, data) => {
            if (err) rejects(err)
            else resolve(data)
        })
    })
}
const writeFile = (file, content) => {
    return new Promise((resolve, rejects) => {
        fs.writeFile(file, content, (err, data) => {
            if (err) rejects(err)
            else resolve("Thanh Cong")
        })
    })
}

const getInfoFile = (path) => {
    fs.stat(path, (err, info) => {
        console.log(info)
    })
}
module.exports = {
    readFile,
    writeFile,
    getInfoFile
}