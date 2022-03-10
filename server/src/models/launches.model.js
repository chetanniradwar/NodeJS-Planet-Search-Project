const launches = new Map() ;
// Map preserves the order of keys being added
let nextFlightNumber =100 ;
const launch = {
    flightNumber : "100" ,
    mission:"Kepler Exploration T" ,
    rocket : "Tesla K9" ,
    launchDate : new Date('March 30, 2022') ,
    target : 'Kepler-442 b' ,
    customer : ['Tesla' , 'NASA'],
    upcoming : true ,
    success : true,
    
    }

function loadLaunches()
{
    launches.set(launch.flightNumber , launch) ;
}

function getAllLaunches()
{
    const obj = Array.from( launches.values() )
    return obj ;
}

function getLaunch(flightNumber)
{
    console.log(launches.get(flightNumber)) ;
    if(launches.get(flightNumber))
    return launches.get(flightNumber)
    else
    return null;
}

function postLaunch(launch)
{
       nextFlightNumber++ ;
       launch.flightNumber = nextFlightNumber ;
       launch.customer = ["SpaceX" ,"ISRO" , "NASA"]
       launch.upcoming = true;
       launch.success = true ;
       launch.launchDate = new Date(launch.launchDate)
       launches.set(launch.flightNumber ,launch)    ;

}
module.exports = { getAllLaunches ,getLaunch , postLaunch , loadLaunches}






