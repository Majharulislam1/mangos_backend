import { Model, Types } from "mongoose";

export interface IOrder {

        userId: Types.ObjectId,
        mangoId: Types.ObjectId,
        quantity: number,
        totalPrice: number,
        status: string,
        address: {
                zipcode: number,
                state: string,
                country: string,
                street: string
        }

}



// instance methods 
export interface IorderMethods {
        checkStocks(id: string): Promise<any>;
}

// static methods 

export interface IOrderModel extends Model<IOrder, {}, IorderMethods> {
       checkStocks(id:string):Promise<any>;
 };