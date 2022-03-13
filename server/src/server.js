
const http = require('http') ;
require('dotenv').config()
const app = require('./app') ;
const {loadPlanets} = require('./models/planets.model')
const {loadLaunches} = require('./models/launches.model')
const {connectDB} = require('./services/mongo')
const PORT = process.env.PORT || 8000 ;
const server = http.createServer(app);
async function startServer()
{
    connectDB() ;
    await loadPlanets() ;
    await loadLaunches()
    server.listen(PORT , () =>{
        console.log("Listening on port " + PORT);
    })

}

startServer() ;


