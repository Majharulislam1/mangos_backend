import { model, Schema } from "mongoose";
import { IOrder, IorderMethods, IOrderModel } from "./orders.interface";
import { Mango } from "../mango/mangos.model";

const order_models = new Schema<IOrder,IOrderModel,IorderMethods>({

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


// order_models.method("checkStocks", async function (id: string) {
//   const product = await Mango.findById(id);
//   if (!product) throw new Error("Product not found");

//   if (product.stock < this.quantity) {
//     throw new Error("Insufficient stock");
//   }

//   return true;
// });

order_models.statics.checkStocks = async function (id: string) {
  const product = await Mango.findById(id);
  if (product) throw new Error("Product not found ... ha ha ha ");

  // if (product.stock <= 0) {
  //   throw new Error("Insufficient stock");
  // }

  return true;
};




const Order = model<IOrder,IOrderModel>('oreder', order_models);

export default Order;