var fs = require('fs')
exports.readFile = (path) => {
    fs.readFile(path, (err, data)=> {
        if(err) console.log(new Error("LOI"))
        else console.log(data.toString())
    })
}
exports.deleteFile = (path) => {
    fs.unlink(path, (err)=> {
        if(err) console.log()
        else console.log("OK!")
    })
}
exports.createFile = (path,name, content = "") => {
    fs.exists(path, (ex)=> {
        if(ex){
            fs.writeFile(path+"/"+name, content, writeFileCB)
        }else {
            console.log("file does'n exist")
        }
    })
}

exports.readFolder = (path) => {
    fs.readdir(path, readFolderCB)
}

exports.deleteFileFolder = (path) => {
    fs.readdir(path, deleteAllFileFolderCB)
}

//calback readfile
const readFolderCB = (err, files) =>{
    if(err) console.log(err+"")
    files.forEach(element => {
      console.log(element)  
    });
}

const deleteAllFileFolderCB = (err, files) =>{
    if(err) console.log(err+"")
    files.forEach(element => {
      fs.unlink("myFolder/"+element, (err)=> {
          console.log(err)
      })
    });
    if(files.lenght == 0){
        console.log("finish")
    }
}

const writeFileCB = (err, data)=> {
    if(err) console.log(err)
    else console.log(data)
}