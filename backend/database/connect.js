const mongoose = require('mongoose')
const URI = require('./config.js')
// mongoose.set('strictQuery', true);
// mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true})

const connectDB = async () => {
    mongoose.set('strictQuery', true);
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true})
    console.log('connected')
}
module.exports = connectDB
