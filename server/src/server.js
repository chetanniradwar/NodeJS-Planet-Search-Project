
const http = require('http') ;
const app = require('./app') ;
const {loadPlanets} = require('./models/planets.model')
const {loadLaunches} = require('./models/launches.model')
const PORT = process.env.PORT || 8000 ;
// console.log(PORT);
const server = http.createServer(app);
async function startServer()
{
    await loadPlanets() ;
    await loadLaunches()
    server.listen(PORT , () =>{
        console.log("Listening on port " + PORT);
    })

}

startServer() ;


