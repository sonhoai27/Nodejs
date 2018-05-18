var fs = require("fs")
tinhTong = (a, b)=> {
    return a+b
}
readFile = (name)=> {
    return new Promise((resolve, rej)=> {
        fs.readFile(name, (err, out)=> {
            if(err) {
                rej(err+"")
            }
            console.log(out.toString())
           resolve(out.toString())
        })
    })
}

createFile = ()=> {
    fs.writeFile("./a.txt", "ASSSSSSSSAA",function (e, d) {
        if(e) {
            console.log(e)
        }else {
            try{
                readFile("./a.txt").then(res => console.log(res)).catch(err => console.log(err))
            }catch(err){
                console.log(err)
            }
        }
    })
}

module.exports  = {
    tinhTong,
    readFile, 
    createFile
}