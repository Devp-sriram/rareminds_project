import mongoose from "mongoose";

const authscheme = new mongoose.Schema(
  {
    name : {
      type:String
    },
    email :{
      type:String,
    },
    password:{
      type:String,
    },
  },{
    collection : 'auth'
  }
)


export default mongoose.model('auth',authscheme);
