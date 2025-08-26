import { Types } from "mongoose";

export interface IOrder {

        userId:Types.ObjectId,
        mangoId:Types.ObjectId,
        quantity:number,
        totalPrice:number,
        status:string,
        address:{
             zipcode:number,
             state:string,
             country:string,
             street:string
        }

}