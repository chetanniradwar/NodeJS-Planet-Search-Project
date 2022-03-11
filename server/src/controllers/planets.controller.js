const {getAllPlanets} = require('../models/planets.model')

function getPlanets(req, res)
{
   return  res.status(200).json(getAllPlanets());
}

module.exports = getPlanets ;