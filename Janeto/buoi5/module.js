const fs = require('fs')

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (error, rd) => {
            if (error) reject(err)
            resolve(rd)
        })
    })
}

const writeFile = (path, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, (error, wf) => {
            if (error) reject(err)
            else resolve("OK")
        })
    })
}

module.exports = {
    readFile,
    writeFile
}