

import { Router } from "express";
import { getallUser, reqister_user } from "./user.controllers";


const userRouters = Router();

userRouters.post('/create_user',reqister_user);
userRouters.get('/allUser',getallUser);


export default userRouters;


