// Create a new project.
// 1. Install nodemon and express.
// 2. Add two dummy middleware that logs request path and request method respectively.
// 3. Add a third middleware that returns a response.
// 4. Now add handling using two more middleware that handle path /, a request to /contact-us page.
// 5. Contact us should return a form with name and email as input fields that submits to /contact-us page also.
// 6. Also handle POST incoming request to /contact-us path using a separate middleware.

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.get('/',(req,res,next)=>{
//     console.log("First dummy middleware",req.url,req.method);
//     next();
// })
// app.get('/product',(req,res,next)=>{
//     console.log("Second dummy middleware",req.url,req.method);
//     next();
// })

// universal /
// app.use('/',(req,res,next)=>{
//     res.send("<p>Welcome to home page dear</p>");
// })

// explicitely for /
app.get('/',(req,res,next)=>{
    console.log("Handling / route ",req.method);
    res.send("<p>Welcome to home page dear</p>");
})
app.get('/contact-us',(req,res,next)=>{
    console.log("Handling /contact-us route ",req.method);
    res.send(`
        <html>
        <head>
        <title>Contact Us</title>
        </head>
        <body>
        <h1>Contact Us</h1>
        <form action="/contact-us" method="POST">
        <input type="text" placeholder="Enter your name" name="name"><br><br>
        <input type="email" placeholder="Enter your email" name="email"><br><br>
        <input type="submit" value="submit">
        </form>
        </body>
        </html>
    `);
})

// handle incoming request
// app.use(bodyParser.urlencoded());
app.use(express.urlencoded());

app.post('/contact-us',(req,res,next)=>{
    console.log("Handling post request",req.method);
    res.send("<p>We will contact you later .</p>")
})



app.listen(3000,()=>{
    console.log(`Server is running at http://localhost:3000`);
})
