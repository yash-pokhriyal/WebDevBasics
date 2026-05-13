const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);

    
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write(`
        <html>
        <head>
        <title>Home Page</title>
        </head>
        <body>

        <h1>Welcome to Home page</h1>
        <h2>Enter your details</h2>

        <form action='/submit-details' method='POST'>
        <input type="text" placeholder="Enter your name " name="username"><br><br>
        <label for='male'>Male</label>
        <input type="radio" name="gender" value="male" id="male"><br><br>
        <label for='female'>Female</label>
        <input type="radio" name="gender" value="female" id="female"><br><br>
        <input type="submit" value="submit">
        </form>

        </body>

        
        </html>
       
    `)
     return res.end();
     }else if(req.url.toLowerCase() === "/submit-details" && req.method=='POST'){
        fs.writeFileSync('user.txt','Yash Pokhriyal');
        // 200 ok | 302 redirection |404 cannot handle
        res.statusCode = 302;
        res.setHeader('location','/')

    }
    res.setHeader('Content-Type','text/html')
    res.write(`
       <html>
       <head>
       <title>Index Page</title>
       </head>
       <body>
       <h1>This is index page .</h1>
       </body>
       </html>  
        `)
    res.end();
});


const PORT = 3001;
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})