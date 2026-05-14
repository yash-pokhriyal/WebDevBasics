const express = require('express');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const { registeredHomes } = require('./hostRouter');

const userRouter = express.Router();

userRouter.get('/',(req,res,next)=>{
    console.log(registeredHomes);
    res.render('home',{registeredHomes:registeredHomes,pageTitle:'airbnb Home',currentPage:'Home'});
})

module.exports = userRouter;