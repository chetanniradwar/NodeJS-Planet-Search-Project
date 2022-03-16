const mongoose = require('mongoose')
require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL ;
// console.log(PORT);


mongoose.connection.once('open',()=>{
console.log("MongoDB connection ready")
})

mongoose.connection.on('error',()=>{
    console.log("Error");

})
async function connectDB()
{
    await mongoose.connect(MONGO_URL) ;
}

async function disconnectDB()
{
    await mongoose.disconnect() ;
}
module.exports = {connectDB ,disconnectDB} ;