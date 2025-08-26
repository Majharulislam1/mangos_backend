import express from 'express';
import cors from 'cors';
import  config  from './config';
import mongoose, { connect } from 'mongoose';
import userRouters from './modules/users/user.routers';
import routes from './modules/routes';

export const app = express();

app.use(express.json());
app.use(cors())

 app.use(routes);

 app.get('/',(req,res)=>{
    
     res.send({
         success:true,
         message:'Server is running'
     })

 })
 


 app.listen(config.port, () => {
        console.log(config.port, " hello world");
    })

async function  server() {
     try{
           await mongoose.connect(config.database_url!);
            
     }
     catch(error){
          console.error(`server error${server}` )
     }
}

server();