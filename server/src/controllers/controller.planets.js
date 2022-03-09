const {getAllplanets} = require('../models/models.planets')

function getPlanets(req, res)
{
   return  res.status(200).json(getAllplanets());
}

module.exports = getPlanets ;