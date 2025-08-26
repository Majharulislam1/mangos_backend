import { Router } from "express";
import { createOrder, getOrder } from "./orders.controllar";

const orderRoutes = Router();

orderRoutes.post('/create_order',createOrder);
orderRoutes.get('/allOrder',getOrder);


export default orderRoutes;