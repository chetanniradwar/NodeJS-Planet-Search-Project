const express = require('express') ;
const getPlanets = require('../controllers/controller.planets')
const planetRouter = express.Router() ;

planetRouter.get('/', getPlanets)

module.exports =  planetRouter 