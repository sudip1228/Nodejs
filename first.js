/*const chalk= require('chalk');

const color= ["red","blue","green"];

color.forEach(function(color){
    console.log(chalk[color]('hello world'));

});*/
/*
console.log("hello");
process.exit(0); //process module
console.log("world");
*/
/*
const fs= require('fs');
const result= fs.readdirSync(__dirname);
console.log(result);
*/
process.stdin.on("data",chunk=>{
    console.log("received ${chunk.length} bytes of data")
});
