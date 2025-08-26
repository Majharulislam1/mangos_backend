import { Request, Response } from "express";
import Order from "./oreders.model";

const createOrder = async(req:Request,res:Response)=>{

      const data = req.body;
      const create_order = await Order.create(data);

      res.send({
           success:true,
           message:'order created successfully',
           create_order
      })


}


const getOrder = async(req:Request,res:Response) =>{
      const  allData = await Order.find()
      .populate("userId", "name email role")   
      .populate("mangoId", "name price origin");

      res.send({
          success:true,
          message:'All Order',
          allData
      })
}





export{
     createOrder,
     getOrder
}
