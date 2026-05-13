const http = require('http')
// vhan object manke kia to yhan destructure
const {userRequestHandler} = require('./user');

const server = http.createServer(userRequestHandler);


const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})
