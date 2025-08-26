import { model, Schema } from "mongoose";
import { IOrder } from "./orders.interface";
import { Mango } from "../mango/mangos.model";


const order_models = new Schema<IOrder>({

    userId: { type: Schema.Types.ObjectId, ref: "userSchema", required: true },
    mangoId: { type: Schema.Types.ObjectId, ref: "mango", required: true },
    quantity: { type: Number, min: 0 },
    totalPrice: { type: Number, min: 0 },
    status: { type: String, min: 0 },
    address: {
        zipcode: Number,
        state: String,
        country: String,
        street: String
    }


})



order_models.pre('save', async function () {
    const mango = await Mango.find(this.mangoId);
    const price = this.quantity * mango[0]?.price;
    this.totalPrice = price;
})



const Order = model('oreder', order_models);

export default Order;