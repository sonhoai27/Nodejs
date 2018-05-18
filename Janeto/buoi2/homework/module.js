var fs = require("fs")
exports.tinhTong = (a, b)=> {
    return a+b
}
exports.readFile = ()=> {
    return new Promise((resolve, rej)=> {
        fs.readFile("./a.txt", (err, out)=> {
            if(err) {
                rej(err+"")
            }
            console.log(out.toString())
           resolve(out.toString())
        })
    })
}