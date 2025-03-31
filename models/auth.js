import mongoose from "mongoose";

const authscheme = new mongoose.schema(
  {
    name : {
      type:string
    },
    email :{
      type:string,
    },
    password:{
      type:string,
    },
    token: {
      type: String,
    },
  },{
    collection : 'auth'
  }
)


export default mongoose.model('auth',authscheme);
