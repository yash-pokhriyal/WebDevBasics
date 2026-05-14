const express = require('express');
const path = require('path');
const rootDir = require('../utils/pathUtil');

const hostRouter = express.Router();

hostRouter.get('/addHome',(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","addHome.html"));
})

const registeredHomes = [];
hostRouter.post('/addHome',(req,res,next)=>{
    console.log(req.body)
    registeredHomes.push({houseName:req.body.name})
    console.log("Home registration successfull for ",req.body);
    // console.log(registeredHomes);
    res.sendFile(path.join(rootDir,"views","homeAdded.html"));
})


exports.hostRouter = hostRouter;
exports.registeredHomes =registeredHomes;
