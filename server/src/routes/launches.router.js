const express = require('express')

const { getLaunches , httpPostLaunches } = require('../controllers/launches.controller')



const launchesRouter = express.Router() ;

launchesRouter.get('/' , getLaunches )


launchesRouter.post('/',httpPostLaunches)

module.exports = launchesRouter ;






