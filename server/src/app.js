const express = require('express');
const path= require('path')
const cors = require('cors') ;
const morgan = require('morgan')
const planetRouter = require('./routes/router.planets');
const launchesRouter = require('./routes/launches.router');
const app = express();



app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(morgan('combined'))
app.use(express.json()) ;
app.use(express.static(path.join(__dirname,'..','public','build')))

app.use('/planets',planetRouter) ;
app.use('/launches',launchesRouter) ;
app.use('/launch',launchesRouter) ;

module.exports = app ;
