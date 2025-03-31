import mongoose from "mongoose";

const taskscheme = new mongoose.Schema(
  {
    assignee:{
      type :String,
      required :true,
    },
    assigner:{
      type :String,
      required :true,
    },
    title: {
      type:String,
      required : true,
    },
    description :{
      type:String,
      required : true,
    },
    isCompleted :{
      type : Boolean,
      required :true,
    }
  }
)


const userscheme = new mongoose.Schema(
  {
    name:{
      type: String,
      required : true,
    },
    role:{
      type : String,
      required :true,
    }, 
    tasks:[taskscheme],
  },{
    collection : 'user',
    timestamps : true,
  }
)

export default mongoose.model('manage',userscheme);

