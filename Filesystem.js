//following code reads the hello.txt file and display the content on the browser

const fs=require("fs");
const http= require("http");//creating server
const server=http.createServer(function(req,res){
//console.log(fs);//see all the methods of filesystem
fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{//reading file to console from hello.txt

res.writeHead(200,{"content-type":"text/plain"})//describes the content type
res.write(data);//writing file hello.txt to server.here data variable contains the content or data of the file
res.end();

    
});
}).listen(3000,()=>{console.log("server is running")});

/*
fs.unlink(__dirname+"/hello.txt",(err,data)=>//delete files
{
    if(err) throw err;
    console.log("file deleted"+data);
});*/
