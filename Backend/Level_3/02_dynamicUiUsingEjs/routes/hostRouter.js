const express = require('express');
const path = require('path');
const rootDir = require('../utils/pathUtil');

const hostRouter = express.Router();

hostRouter.get('/addHome',(req,res,next)=>{
    res.render('addHome',{pageTitle:'Add Home to airbnb',currentPage:'addHome'})
})

const registeredHomes = [];
hostRouter.post('host/addHome',(req,res,next)=>{
    console.log('Home Registration successful for:', req.body);
    registeredHomes.push(req.body);
    res.render('homeAdded',{pageTitle:'Home added Successfully',currentPage:'homeAdded'});

    
})


exports.hostRouter = hostRouter;
exports.registeredHomes =registeredHomes;
