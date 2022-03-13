const axios = require('axios')
const launches = require('./launches.mongo');
const planets = require('./planets.mongo')
const { getPagination } = require('../services/query')
const launch = {
    flightNumber: 1000,  // flight_number
    mission: "Kepler Exploration T",// name
    rocket: "Tesla K9", // rocket.name
    launchDate: new Date('March 30, 2022'), //date unix
    target: 'Kepler-442 b', // not availble
    customers: ['Tesla', 'NASA'], //payloads.customers
    upcoming: true, // upcoming
    success: true, //success

}

async function getSpaceXLaunches()
{
    console.log("Downloading SpaceX data from API ....")
    const SPACEX_URL = 'https://api.spacexdata.com/v4/launches/query'
    const spacex_launches = [];
    
        const response = await axios.post(SPACEX_URL,
            {
                query : { } ,
                options:{
                populate : ["payloads","rocket"],
                pagination : false 
                }

            })
            if(response.status!==200) 
            { console.log("Could not connect with spaceX API")
                return false }
            
            
           const allLaunches = response.data.docs ;
      
                for ( let sLaunch  of allLaunches ) 
                {
                 let s_launch= { 
                        flightNumber : sLaunch['flight_number'] ,
                       mission : sLaunch['name'],// name
                       rocket: sLaunch['rocket']['name'], // rocket.name
                       launchDate: new Date(+sLaunch['date_unix']), //date unix
                       customers: sLaunch['payloads'].flatMap(  payload => {
                             return payload['customers'] ;
                       }), //payloads.customers
                       upcoming : sLaunch['upcoming'], // upcoming
                       success: sLaunch['success'], //success
                    }
                    spacex_launches.push(s_launch);

                }
                console.log("SpaceX launches succesfully downloaded") ;
              return spacex_launches ;      

        
        

   



} 

async function uploadSpaceXLauches()
{
    const response = await  launches.find({flightNumber:1})
    
    if(response.length===0)
    {
       const sLaunches = await getSpaceXLaunches() ;
       if( sLaunches )
       {
           await launches.create( sLaunches);
            console.log("loaded spaceX launches to database")
       }
    }
    else{
        console.log("SpaceX launches already uploaded")
    }
   
}

async function loadLaunches() {
    try {
        await uploadSpaceXLauches();
        await launches.updateOne({ flightNumber: 1000 }, launch, { upsert: true });
    }
    catch (err) {
        console.log(`Error --> ${err.stack}`)
    }
}



async function getAllLaunches(page , limit) {
    const {toSkip , toLimit } = getPagination(page ,limit )
    const allLaunches = await launches.find({},{__v:0 ,_id:0})
    .sort( {flightNumber : 1 })
    .skip(toSkip)
    .limit(toLimit)

    return allLaunches;
}


async function postLaunch(launch) {
        const planetexists = await planets.findOne({ kepler_name: launch.target },{},{})
    if (!planetexists)
        throw new Error("Planet is not listed")

    const lastEntry = await launches.findOne().sort('-flightNumber');

    // console.log(lastEntry);
    const nextFlightNumber = lastEntry.flightNumber + 1;
    launch.flightNumber = nextFlightNumber;
    launch.customers = ["SpaceX", "ISRO", "NASA"]
    launch.upcoming = true;
    launch.success = true;
    launch.launchDate = new Date(launch.launchDate)

    try {
        await launches.create(launch);
    }
    catch (err) {
        throw new Error(err)
    }
    return launch;

}

async function deleteLaunch(id) {
    const response = await launches.updateOne({ flightNumber: id }, { upcoming: false, success: false },)
    if (response.matchedCount == 0)
        return "Launch does not exist"
    if (!response.acknowledged)
        return "Write Assess Disabled"

    return "Success"

}
module.exports = { getAllLaunches, postLaunch, loadLaunches, deleteLaunch }






