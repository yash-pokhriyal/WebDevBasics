const {sumRequestHandler} =require('./sum')
const userRequestHandler = ((req,res)=>{
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    if(req.url==='/'){
        res.write(`
            <html>
            <head><title>Welcome Page</title></head>
            <body>
            <h1>Welcome to our page Dear</h1>
            <a href="/calculater">Calculater Page<a>
            </body>
            </html>
        `)
        return res.end();
    }else if(req.url ==='/calculater'){
        res.write(`
            <html>
            <head>
            <title>Calculater Page</title>
            </head>
            <body>
            <form action="/calculate-result" method="POST">
            <input type="text" placeholder="Enter first number ." name="first"><br><br>
            <input type="text" placeholder="Enter second number ."name="second"><br><br>
            <input type="submit" value="submit">
            </form>
            </body>
            </html>
        `)
        return res.end();
    }else if(req.url.toLowerCase()==='/calculate-result' && req.method ==='POST'){
        return sumRequestHandler(req,res);
    }
    res.write(`
        <html>
        <head>
        <title>404 Page</title>
        </head>    
        <body>
        <h1>404 page not found</h1>
        </body>    
        </html>
    `)
    return res.end();
})

exports.userRequestHandler =userRequestHandler;

// yhan hmne object bnake import kia