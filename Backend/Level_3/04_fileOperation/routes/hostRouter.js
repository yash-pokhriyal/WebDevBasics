const express = require('express');

const hostRouter = express.Router();

const homesController = require('../controllers/homes');

hostRouter.get('/addHome',homesController.getAddHomes);
hostRouter.post('/addHome',homesController.postHomes);

exports.hostRouter = hostRouter;

