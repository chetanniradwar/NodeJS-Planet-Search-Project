const express = require('express');
const path= require('path')
const cors = require('cors') ;
const planetRouter = require('./routes/router.planets')
const app = express();



app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(express.json()) ;
app.use(express.static(path.join(__dirname,'..','public','build')))
app.use('/planets',planetRouter) ;
module.exports = app ;
