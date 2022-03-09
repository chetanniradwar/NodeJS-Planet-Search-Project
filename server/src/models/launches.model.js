const launches = new Map() ;
// Map preserves the order of keys being added

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


module.exports = { launches ,loadLaunches}






