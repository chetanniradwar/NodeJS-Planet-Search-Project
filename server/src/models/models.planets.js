 const planets = [] ;

const fs = require('fs');
const path = require('path')
const parser = require('csv-parser')

function isHabitable(planet)
{
    if(planet['koi_disposition'] == "CONFIRMED" && planet['koi_pdisposition']=='CANDIDATE' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6)
    return true;

    else
    return false;
}
function getAllPlanets()
{
    return planets;
}

function loadPlanets()
 {
    const csvpath  = path.join(__dirname,"..","..", "data", "kepler_data.csv")

const stream = fs.createReadStream(csvpath) ;
let count=0;
stream.pipe(parser({ 
    skipComments: '#',
    strict: true,
}))
.on('data',(planet)=>{
    // console.log(planet);
    if(isHabitable(planet))
    {
        count++;
       planets.push(planet) ;
    }
})
.on('end',(data)=>{
console.log("Total count" + "  " + count);
})
 }

module.exports = {getAllPlanets , loadPlanets} ;