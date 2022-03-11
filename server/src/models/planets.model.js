const fs = require('fs');
const path = require('path')
const parser = require('csv-parser')
const planets = require('./planets.mongo')

function isHabitable(planet)
{
    if(planet['koi_disposition'] == "CONFIRMED" && planet['koi_pdisposition']=='CANDIDATE' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6)
    return true;

    else
    return false;
}
const planetsCount = 0 ;
async function getAllPlanets()
{
    const planetsObj =  await planets.find({});
    planetsCount = planetsObj.length;
    return planetsObj// return all planets from db no projections
}

function loadPlanets()
 {
    const csvpath  = path.join(__dirname,"..","..", "data", "kepler_data.csv")

const stream = fs.createReadStream(csvpath) ;
stream.pipe(parser({ 
    skipComments: '#',
    strict: true,
}))
.on('data',async (planet) =>{
    if(isHabitable(planet))
    {
           await savePlanet(planet) ; 
    }
})
.on('end',(data)=>{
console.log("Total habitable count:" + "  " + planetsCount);
})
 }

async function savePlanet(planet)
{
    try{
        await planets.updateOne(
            {kepler_name :data.kepler_name },
            {kepler_name :data.kepler_name},
            {upsert:true});
        
    }
    catch(err){
        console.log(`Could not save palnet to database error:${err}`)
    }
}


module.exports = {getAllPlanets , loadPlanets} ;