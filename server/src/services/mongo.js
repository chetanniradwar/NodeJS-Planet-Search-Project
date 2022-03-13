const mongoose = require('mongoose')

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
module.exports = {connectDB} ;