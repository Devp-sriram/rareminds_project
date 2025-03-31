import Auth from '../models/auth.js'
import verifyUser from "../models/verifyUser.js"
import  sendMail  from "./sendMail.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();


export async function InsertVerifyUser(name , email , password){
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const token = await generateToken(email);


    const newUser = new verifyUser({
      name: name,
      email: email,
      password: hashedPassword,
      token: token,
    });

    const activationLink = `${process.env.BACKEND_URL}/signin/${token}`;
    const content = `<h4>hi,there</h4>
    <h5>welcome to app</h5>
    <P>thankyou for signinup click the below link to activate</p>
    <a href ="${activationLink}" >clink here</a>
    <p>regrads</p>
    <P>Team</p>`;

    await newUser.save();
    sendMail(email, "verifyUser" , content);

    
  } catch (error) {
    console.log(error);
  }  
}
export async function generateToken(email) {
      const token = jwt.sign(email, process.env.signup_Secret_Token);
      return token;
}

export async function InsertSignupUser(token){
  try {
  const userVerify = await verifyUser.findOne({token:token})
  if(userVerify){
    const newUser = new Auth({
      name:userVerify.name,
      email:userVerify.email,
      password:userVerify.password,
      forgetPassword:{}
    });

    await newUser.save();
    await userVerify.deleteOne({token:token})
    const content = `<h4>registration sucess</h4>
    <h5>welcome to app</h5>
    <P>you're registration succesful</p>
    <p>regrads</p>
    <P>Team</p>`;

    sendMail( newUser.email, "registration succesful" ,content);
    
    return `<h4>registration sucess</h4>
    <h5>welcome to app</h5>
    <P>you're registration succesful</p>
    <p>regrads</p>
    <P>Team</p>`; 
  }
  return`<h4>registration failed</h4>
  <h5> link  is expired......</h5>
  <P>you're registration succesful</p>
  <p>regrads</p>
  <P>Team</p>`;
  }catch(error){
    console.log(error.message)
    return  ` <html>
              <body>
              <h4>registration failed</h4>
              <h5> link  is expired......</h5>
              <P>you're registration succesful</p>
              <p>regrads</p>
              <P>Team</p>
              </body>
              </html>`
 ;
  }; 
}



