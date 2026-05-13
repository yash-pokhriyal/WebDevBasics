// Middleware ek aisa function hai jo request aane aur response bhejne ke beech mein "checkpost" ya "helper" ka kaam karta hai.

// core module
const http = require('http');
// importing express
const express = require('express');

const app = express();



// adding middleware
app.use((req,res,next)=>{
    console.log("Came in first middleware",req.url,req.method);
    // sending response
    res.send("<p>Welcome to complete coding node js series</p>")
    next();
})

app.use((req,res,next)=>{
    console.log("Came in second middleware",req.url,req.method);
})


const server = http.createServer(app)


const PORT = 3002;
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})