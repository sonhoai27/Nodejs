var fs = require('fs')
exports.readFile = (path) => {
    console.log("AAA")
}
exports.deleteFile = (path) => {
    console.log("AAA")
}
exports.createFile = (name, content = "") => {
    console.log("AAA")
}

exports.readFolder = (path) => {
    fs.readdir(path, readFolderCB)
}

//calback readfile
const readFolderCB = (err, files) =>{
    if(err) console.log(err+"")
    files.forEach(element => {
      console.log(element)  
    });
}