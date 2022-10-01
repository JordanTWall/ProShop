import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })

    console.log(
      `MongoDB Connected to host ${mongoose.connection.host}`.cyan.underline
    )
  } catch (error) {
    console.error(
      `Error Connecting to MongoDB. Error: ${error.message}`.red.underline.bold
    )
  }
}

export default connectDB
