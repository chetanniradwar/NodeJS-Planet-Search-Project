const express = require('express');
const cors = require('cors') ;
const planetRouter = require('./routes/router.planets')
const app = express();



app.use(cors({
    origin:'http://localhost:3000'
}));
app.use('/planets',planetRouter) ;
module.exports = app ;
