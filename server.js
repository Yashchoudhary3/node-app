var http = require('http')
var server = http.createServer((req , res)=>{
    res.write("Hello world");
    res.end()
})
server.listen(3000,()=>{
    console.log("port is running on 3000")
});