var {tinhTong, readFile} = require('./module')
const http = require('http')

http.createServer((req, res)=> {
    res.writeHead(200, {'content-type': 'text/plain'})
   // res.end(tinhTong(3,6)+"")
   readFile().then(r => res.end(r))
}).listen(3000, ()=> {
    console.log("started")
})