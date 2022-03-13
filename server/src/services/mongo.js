const mongoose = require('mongoose')

const MONGO_URL = 'mongodb+srv://nasa-api:b9ado6iTqlqp9RJj@nasaprojectcluster.dvtdo.mongodb.net/NASAdb?retryWrites=true&w=majority'
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