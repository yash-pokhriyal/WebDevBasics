const express = require('express');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const { registeredHomes } = require('./hostRouter');

const userRouter = express.Router();

userRouter.get('/',(req,res,next)=>{
    console.log(registeredHomes);
    res.sendFile(path.join(rootDir,"views","home.html"));
})

module.exports = userRouter;