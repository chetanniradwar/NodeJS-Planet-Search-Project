const {launches} = require('../models/launches.model')

function getLaunches(req, res)
{
    const obj = Array.from( launches.values() )
        return res.status(200).json(obj) ;
}

module.exports = { getLaunches } 
