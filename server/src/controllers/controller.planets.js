const {planets} = require('../models/models.planets')

function getPlanets(req, res)
{
   return  res.status(200).json(planets);
}

module.exports = getPlanets ;