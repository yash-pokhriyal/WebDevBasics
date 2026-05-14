const express = require('express');
const path = require('path');
const rootDir = require('./utils/pathUtil');
const {hostRouter}= require('./routes/hostRouter');
const userRouter = require('./routes/userRouter');

const app = express();

// btana ki ejs istemaal kar rhe
app.set('view engine','ejs')
app.set('views','views')

app.use(express.urlencoded());

app.use(express.static(path.join(rootDir,"public")));

app.use(userRouter);
app.use(hostRouter);

app.use((req,res,next)=>{
    res.status(404).render('error',{pageTitle:'Page Not Found',currentPage:'404'});
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})