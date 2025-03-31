import express from 'express'
import { authenticateUser } from '../controllers/login.js'

const  router =express.Router();

export default router.post('/',async (req,res)=>{
   try{const {email,password} = await req.body;
    const loginCredential = await authenticateUser(email , password)
    if(loginCredential){
         res.status(200).send(`succesfully signined as ${loginCredential.name}`)
    }else if(loginCredential === 'error occur while auth - user'){
        res.status(404).send("error occur while auth - user")
    }
    }catch(e){
        console.log(e);
        res.status(500).send('route server busy')
    };
    
})

