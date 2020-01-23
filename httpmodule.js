const http= require("http");
const server=http.createServer(function(req,res){
res.writeHead(200,{"content-type":"text/html"})//describes the content type
res.write("<h1>node is here </h1>");//writing to server
res.write("<h1>nodemon is here </h1>");//writing to server


res.end();//ending a response and it must be mentioned
}).listen(3000,()=>{console.log("server is running")});

//install nodemon --> npm install -g nodemon