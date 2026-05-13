const fs = require('fs');


const userRequestHAndler =((req,res)=>{
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
        const body = [];
        // reading chunks | on ka matlab mai listen karna chahta jab bhi naya data ajae
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk)
        })

        //Buffering chunks
        req.on('end',()=>{
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);

            // parsing request
            const params = new URLSearchParams(fullBody);
            // const bodyObject = {};
            // for(const [key,val] of params.entries()){
            //     bodyObject[key] = val;
            // }
            const bodyObject=Object.fromEntries(params);
            fs.writeFileSync('user-details.txt',JSON.stringify(bodyObject));
        })




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


module.exports = userRequestHAndler;











































// Node me hum jo bhi kaam kr rhe hote hain hum mainly saara kaam krte hain event driven programming
// kuch hua ispe respond kijiye

