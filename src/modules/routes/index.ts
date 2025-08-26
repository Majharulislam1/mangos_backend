import { Router } from "express";
import userRouters from "../users/user.routers";
import mango_route from "../mango/mangos.routes";
import orderRoutes from "../orders/order.routes";



const routes = Router();


routes.use("/users",userRouters);
routes.use('/mango',mango_route);
routes.use('/order',orderRoutes)

export default routes;