//Asynchronize method does not execute program step by step and it does not wait current line of code to get executed before moving to next line of code.
const fs=require("fs");
try{
const data=fs.readFileSync(__dirname+"/hello.txt","utf8");//synchronous method execute program step by step and it waits until the current line of code is executed before moving to next line.
console.log(data);
}
catch(e){
    console.log(e);
}
console.log("this is end");