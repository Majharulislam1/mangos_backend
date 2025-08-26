import { Request, Response } from "express";
import { Mango } from "./mangos.model";


const create_mangos = async (req: Request, res: Response) => {

    const data = req.body;
    const mango = await Mango.create(data);

    res.send({
        success: true,
        message: 'user successfully created',
        mango
    })

}


const get_allMango = async (req: Request, res: Response) => {

    const allMango = await Mango.find();

    res.send({
        success: true,
        message: 'get all mangos',
        allMango
    })

}

const getMangoById = async (req:Request,res:Response) => {
     
      const id = req.params.id;
      const oneMango = await Mango.findById(id);

      res.send({
          success:true,
          message:'Successfully get one mango',
          oneMango
      })

}


const updateMango = async(req:Request,res:Response) => {
         const id = req.params.id;
         const update_mango = req.body;
         const mango = await Mango.findByIdAndUpdate(id,update_mango,{new:true,update:true});
         
         res.send({
                 success:true,
          message:'Successfully update mango',
          mango
         })
}


const deleteMango = async(req:Request,res:Response) =>{
      const id = req.params.id;
      
      const delete_mango = await Mango.findByIdAndDelete(id);

      res.send({
          success:true,
          message:'Successfully delete data',
          delete_mango
      })

}




export {
    create_mangos,
    get_allMango,
    getMangoById,
    updateMango,
    deleteMango
}