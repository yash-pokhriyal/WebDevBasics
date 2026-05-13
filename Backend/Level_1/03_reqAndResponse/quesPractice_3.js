// Create a page that shows a navigation bar of
// Myntra with the following links:
// A. Home
// B. Men
// C. Women
// D. Kids
// E. Cart
// Clicking on each link page should navigate to that
// page and a welcome to section text is shown
// there.

const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);

    if(req.url==='/Home'){
        res.setHeader('Content-Type','text/html');
        res.write(`
            <h1>Welcome to Home</h1>
        `)
        return res.end()
    }else if(req.url==='/Men'){
        res.setHeader('Content-Type','text/html');
        res.write(`<h1>Welcome to Men</h1>`);
        return res.end();
    }else if(req.url==='/Women'){
        res.setHeader('Content-Type','text/html');
        res.write(`<h1>Welcome to Women</h1>`);
        return res.end();
    }else if(req.url ==='/Kids'){
        res.setHeader('Content-Type','text/html');
        res.write(`<h1>Welcome to Kids</h1>`);
        return res.end();
    }else if(req.url==='/Cart'){
        res.setHeader('Content-Type','text/html');
        res.write(`<h1>Welcome to cart</h1>`);
        return res.end();
    }

    res.write(`
       <html>
       <head>
       <title>Myntra</title>
       </head>
       <body>
       <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">Cart</a></li>
        </ul>
        </nav>
       </body>
       </html> 
    `);


    

})

const PORT = 3002;
server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);

})

// res.setHeader ka kaam server aur browser ke beech ek "instruction manual" bhejna hota hai.

// Jab server browser ko koi data bhejta hai (jaise koi file ya text), toh browser ko pehle se nahi pata hota ki wo cheez kya hai—wo ek image hai, ek HTML file hai, ya koi PDF. setHeader wahi jankari browser ko deta hai.