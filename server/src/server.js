
const http = require('http') ;
const mongoose = require('mongoose')
const app = require('./app') ;
const {loadPlanets} = require('./models/planets.model')
const {loadLaunches} = require('./models/launches.model')
const PORT = process.env.PORT || 8000 ;
const MONGO_URL = 'mongodb+srv://nasa-api:b9ado6iTqlqp9RJj@nasaprojectcluster.dvtdo.mongodb.net/NASAdb?retryWrites=true&w=majority'
// console.log(PORT);
const server = http.createServer(app);

mongoose.connection.once('open',()=>{
console.log("MongoDB connection ready")
})

mongoose.connection.on('error',()=>{
    console.log("Error");

})

async function startServer()
{
    await mongoose.connect(MONGO_URL) ;
    await loadPlanets() ;
    await loadLaunches()
    server.listen(PORT , () =>{
        console.log("Listening on port " + PORT);
    })

}

startServer() ;


