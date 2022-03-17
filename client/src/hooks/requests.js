
const URL = ''

async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
 let response = await fetch(`${URL}/planets`)
    const  planets  = await response.json() ;

    // console.log(planets);
return planets ;
}



async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
  let response = await fetch(`${URL}/launches`)
  const  launches  = await response.json() ;
  // console.log(launches);
      launches.sort((a,b)=>{
         return a.flightNumber - b.flightNumber ;
          })
          // console.log(launches);
        return launches ;


}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.


try{
  const response = await fetch(`${URL}/launches` ,{
    method:"post",
    headers :{
              "Content-Type" :"application/json" ,
              },       
    body : JSON.stringify(launch) ,
  })
    return response;

}
catch(err){
  return {ok:false }; 
}
}

 

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
  try{
    const response = await fetch(`${URL}/launches/${id}` ,{
      method:"delete"
    })
      return response;
  
  }
  catch(err){
    return {ok:false }; 
  }

}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};