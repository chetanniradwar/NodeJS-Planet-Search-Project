const express = require('express');
const path= require('path')
const cors = require('cors') ;
const morgan = require('morgan')
const planetRouter = require('./routes/planets/router.planets');
const launchesRouter = require('./routes/launches/launches.router');
const app = express();



app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(morgan('combined'))
app.use(express.json()) ;
app.use(express.static(path.join(__dirname,'..','public','build')))

app.use('/planets',planetRouter) ;
app.use('/launches',launchesRouter) ;

module.exports = app ;
