const http = require('http');

const server = http.createServer((req,res)=>{
    // understand request object
    console.log(req.url,req.method,req.headers);

    // sending response
    // res.setHeader('Content-Type','json')

    // routing request
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write(`
           <html>
           <head>
           <title>Home Page</title>
           </head>
           <body>
           <h1>Welcome to home page</h1>
           </body>
           </html> 
        `)
        return res.end();
    }else if(req.url==='/products'){
        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
            <head>
            <title>Product page</title>
            </head>
            <body>
            <h1>Welcome this is product page</h1>
            </body>
            </html>   
            
        `)
        return res.end();
    }
    res.setHeader('Content-Type','text/html')
    res.write(`
        <html>
        <head>
        <title>Index Page</title>
        </head>
        <body>
        <h1>Welcome Page</h1>
        </body>
        </html>
        
    `)
    return res.end();
})


const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})

// get data lene aaya 
// post dene aaya hu