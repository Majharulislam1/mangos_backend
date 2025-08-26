import { Request, Response } from "express";
import User from "./user.model";



const reqister_user = async (req:Request,res:Response)=>{
       const payload = req.body;
       const user = new User(payload);
       const data = await user.save();

       res.send({
            success:true,
            message:'user successfully created',
            data
       })

}


const getallUser = async (req:Request,res:Response)=>{
       
     const all_user = await User.find({});
     
     res.send({
         success:true,
         message:"All user find",
         all_user
     })

}

export{
     reqister_user,
     getallUser
}