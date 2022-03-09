
const http = require('http') ;
const app = require('./app') ;
const {loadPlanets} = require('./models/models.planets')
const PORT = process.env.PORT || 8000 ;

// console.log(PORT);
const server = http.createServer(app);

async function startServer()
{
await loadPlanets() ;
    server.listen(PORT , () =>{
        console.log("Listening on port " + PORT);
    })

}

startServer() ;


