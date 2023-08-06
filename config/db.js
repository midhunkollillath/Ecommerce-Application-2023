import mongoose from "mongoose";
import colors from 'colors'

const connectDB = async()=>{
 try{
  const conn = await mongoose.connect(process.env.MONGO_URL)
  console.log(`connected to database ${conn.connection.host}`.bgBlue)
 } catch(err){
    console.log(`Error in mongodb ${err}`.bgRed.white)
 }
}

export default connectDB