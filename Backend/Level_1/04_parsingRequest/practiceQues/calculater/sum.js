const sumRequestHandler = (req,res)=>{
    console.log('In sum request handler',req.url);
    const body=[];
    req.on('data',(chunk)=>{
        body.push(chunk);
    })
    req.on('end',()=>{
        const fullBody = Buffer.concat(body).toString();
        const params = new URLSearchParams(fullBody);
        const bodyObj = Object.fromEntries(params);
        const result = Number(bodyObj.first)+Number(bodyObj.second);
        console.log(result);
        // explained in future lesson
        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
            <head><title>Result</title></head>
            <body>
            <h1>Your sum is ${result}<h1>
            </body>
            </html>
            `)
    })
    
}

exports.sumRequestHandler = sumRequestHandler