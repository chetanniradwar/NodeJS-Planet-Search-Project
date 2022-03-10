const {getAllPlanets} = require('../models/models.planets')

function getPlanets(req, res)
{
   return  res.status(200).json(getAllPlanets());
}

module.exports = getPlanets ;