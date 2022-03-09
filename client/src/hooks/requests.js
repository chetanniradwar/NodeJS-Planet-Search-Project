async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
 let response = await fetch('http://localhost:8000/planets')
    const  planets  = await response.json() ;

    console.log(planets);
return planets ;
}



async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};