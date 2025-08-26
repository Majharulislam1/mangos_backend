import { model, Schema } from "mongoose";


const userSchema = new Schema<Iuser>({
    name: { type: String , required:true, trim:true
     },
    email: { type: String , required:true, unique:true},
    password: { type: String, required:true, },
    phone: { type: String ,required:true, },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default:'user',
    },

})


const User = model('userSchema',userSchema);

export default User;