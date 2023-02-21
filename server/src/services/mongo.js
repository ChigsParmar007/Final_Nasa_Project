const mongoose = require('mongoose')

require('dotenv').config()

// Update below to match your own MongoDB connection string.
const MONGO_URL = process.env.MONGO_URL

// const MONGO_URL = 'mongodb+srv://chigsparmar07:Chigs6779@chigscluster.0fbezwy.mongodb.net/nasa-api?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!')
})

mongoose.connection.on('error', (err) => {
  console.error(err)
})

const mongoConnect = async () => {
  await mongoose.connect(MONGO_URL)
}

const mongoDisconnect = async () => {
  await mongoose.disconnect()
}

module.exports = {
  mongoConnect,
  mongoDisconnect
}