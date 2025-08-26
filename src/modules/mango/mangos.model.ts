import { model, Schema } from "mongoose";
import { IMango } from "./mangos.interface";


const mangoSchema = new Schema<IMango>({

     name:{type:String,required:true,trim:true},
     verity:{type:String,required:true,trim:true},
     price:{type:Number,required:true,trim:true,min:0},
     stock:{type:Number,required:true,trim:true,min:0},
     origin:{type:String,required:true},
     season:{type:String,
        enum:['winter','summer'],
        default:'summer'
     },
     unit:{type:'string',
          enum:['KG','TON'],
          default:'KG'
     }

})

export const Mango = model("mango", mangoSchema);

