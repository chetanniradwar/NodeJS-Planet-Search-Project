const express = require('express')

const { getLaunches , httpPostLaunches ,httpDeleteLaunches } = require('../controllers/launches.controller')



const launchesRouter = express.Router() ;

launchesRouter.get('/' , getLaunches )


launchesRouter.post('/',httpPostLaunches)

launchesRouter.delete('/:id',httpDeleteLaunches)

module.exports = launchesRouter ;






