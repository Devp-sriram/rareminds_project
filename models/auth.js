import mongoose from "mongoose";

const authscheme = new mongoose.schema(
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
    token: {
      type: String,
    },
  },{
    collection : 'auth'
  }
)


export default mongoose.model('auth',authscheme);
