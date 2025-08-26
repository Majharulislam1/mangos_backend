import { Router } from "express";
import { create_mangos, deleteMango, get_allMango, getMangoById, updateMango } from "./mangos.controllers";


const mango_route = Router();

mango_route.post('/create_mango',create_mangos);
mango_route.get('/allMango',get_allMango);
mango_route.get('/single_mango/:id',getMangoById);
mango_route.patch('/update_mango/:id',updateMango);
mango_route.delete('/delete_mango/:id',deleteMango);


export default mango_route;

