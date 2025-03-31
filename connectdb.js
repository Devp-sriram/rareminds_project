import mongoose from  'mongoose';
import dotenv from 'dotenv'
dotenv.config();

function connectDb(){
  try{
    mongoose.connect(process.env.MONGODB_URL);
    console.log('connect to database')
  }catch(err){
    console.log(err)
  }
}

export default connectDb
