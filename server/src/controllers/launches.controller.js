const {getAllLaunches} = require('../models/launches.model')

function getLaunches(req, res)
{
   
        return res.status(200).json(getAllLaunches()) ;
}

module.exports = { getLaunches } 
