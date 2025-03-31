import express from 'express';
import cors from 'cors';
import connectDb from './connectdb.js';

import signinRouter from "./routes/signin.js"
import loginRouter from "./routes/login.js" 

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors({origin:'*'}))

app.use("/signin",signinRouter);
app.use('/login',loginRouter );

app.get('/',(req,res)=>{
  res.send('hello')
})
connectDb();

app.listen(port,()=>{
  console.log('app listening to the port 4000')
})
