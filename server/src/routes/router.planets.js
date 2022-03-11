const express = require('express') ;
const getPlanets = require('../controllers/planets.controller')
const planetRouter = express.Router() ;

planetRouter.get('/', getPlanets)

module.exports =  planetRouter 