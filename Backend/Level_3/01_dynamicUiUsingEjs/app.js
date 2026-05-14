const express = require('express');
const path = require('path');
const rootDir = require('./utils/pathUtil');
const {hostRouter}= require('./routes/hostRouter');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.urlencoded());

app.use(express.static(path.join(rootDir,"public")));

app.use(userRouter);
app.use(hostRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,"views","error.html"));
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})