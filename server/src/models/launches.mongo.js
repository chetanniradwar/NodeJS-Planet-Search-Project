const mongoose = require('mongoose') ;


const launchesSchema = new mongoose.Schema({
    flightNumber :{
        type : Number ,
        required: true 
    } ,
    mission : {
        type : String,
        required:true
    } ,
    LaunchdDate : {
        type : Date,
        required : true 
    },
    target :{
        type:true,
        required : true
    },
    upcoming :{
        type :Boolean ,
        required:true 
    },
    success:{
        type :Boolean,
        required:true,
        default:true 
    }
})

module.exports = mongoose.model(launchesSchema) ;