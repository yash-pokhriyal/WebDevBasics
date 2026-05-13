// Creating a first node server

const http = require('http');

function requestListener(req,res){
    console.log(req)
    // to exitor stop the server or event loop
    // ye server tab tk sunega jb tk isko pehli request ni milti phir exit kar jaega
    process.exit();
}

const server = http.createServer(requestListener);

// createServer ek function leta hai callback
// browser hmhe request bhejega 

// server ko kaan lgake sun na hoga ki uspe client ki request aari hai kya ?
// upar hmne server bnaya par listen ni kia
// server.listen(3000);


const PORT = 3000;
server.listen(PORT,()=>{
     console.log(`Server running at http://localhost:${PORT}`);
})
