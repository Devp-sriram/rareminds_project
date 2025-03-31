import Auth from "../models/auth.js"
import jwt  from "jsonwebtoken"
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()
// const verifyUser =require("../models/verifyUser")
//



export async function CheckUser(email) {
    try {
        const user = await Auth.findOne({ email : email });
        console.log(user);
        if (user) {
            return true;
        }else{
            return false;
        }
    } catch(error){
        return error.message
    }
}

export async function authenticateUser(email, password){
    try{
        const userCheck = await Auth.findOne({email})
        if(userCheck){
          const validPassword = await bcrypt.compare( password , userCheck.password)  
          if(validPassword){
          const token =await jwt.sign({email},process.env.login_secret_token)
            const response = {
                id:userCheck._id,
                name:userCheck.name,
                email:userCheck.email,
                token:token,
                status:true,
            }
 
            await Auth.findOneAndUpdate(
              {email:userCheck.email},
              {$set:{token:token}},
              {new:true}
            );
            return response;
          }else{return 'invalid password'}
        }else{ 
            return 'invalid username'
        }
       
    }catch(error){
        console.log(error)
        return  'error occur while auth - user'
    }
}

export async function autharizeUser(token){
    try{
        const decodedToken =await jwt.verify( token , process.env.login_secret_token)
        if(decodedToken){
            const email = decodedToken.email;
            if(email){
                const data = await User.findOne({ email : email})
                return data
            }
        }else
        return false;
    }catch(e){
        console.log(e);
    }
};
