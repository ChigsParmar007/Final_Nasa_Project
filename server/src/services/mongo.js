const mongoose = require('mongoose')

require('dotenv').config()

// Update below to match your own MongoDB connection string.
// const MONGO_URL = process.env.MONGO_URL

const MONGO_URL = 'mongodb+srv://nasa-api:Chigs6779@nasacluster.gbhw11r.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!')
})

mongoose.connection.on('error', (err) => {
  console.error(err)
})

const mongoConnect = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/NasaData')
}

const mongoDisconnect = async () => {
  await mongoose.disconnect()
}

module.exports = {
  mongoConnect,
  mongoDisconnect
}