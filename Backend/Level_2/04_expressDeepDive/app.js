const express = require('express');
const app = express();


// middleware | path based routing

// app.use('/',(req,res,next)=>{
//     console.log("Came in first middleware");
//     // res.send("<p>Welcome page<p>")
//     next();
// })

// app.use('/product',(req,res,next)=>{
//     console.log("Came in second middleware");
//     res.send("<p>Welcome product page<p>")
    
// })


// request based routing

app.get('/',(req,res,next)=>{
    console.log("I am first middle ware",req.url,req.method)
    next();
})

// submit details ko direct browser me dalre to ye skip hojaega aur neeche wala came from another middleware screen pe print hojaega
app.post('/submit-details',(req,res,next)=>{
    console.log("I am second middle ware",req.url,req.method)
    res.send("<p>welcome to coding page</p>")
})

app.use('/',(req,res,next)=>{
     console.log("Came in third middleware",req.url,req.method)
    res.send("<p>Came from another middle ware</p>")
})




const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})


// cannot  call next() after res.send()