// Hello world
console.log('Hello World');

// fs module import
const fs = require('fs');

// to write a file
fs.writeFile('output.txt','Writing File',(err)=>{
    if(err){
        console.log("error occured");
    }else{
        console.log('File Written successfully');
    }
})

// REPL read eval print loop | Quick testing
// terminal : node
// jese hi band kia vese hi sab clear
