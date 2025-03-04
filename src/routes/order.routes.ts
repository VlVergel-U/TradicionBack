import { Router } from "express";
import { handleErrors } from "../middelwares/validate.middelware";
import { createOrder, getAllOrders, getOrder, changeStatus } from "../controllers/order.controller";
import { handleToken } from "../middelwares/requestToken.middelware";
import { createOrderValidator, getOrderValidator, changeStatusValidator } from "../validators/order.validator";

const orderRouter = Router()

orderRouter.post('/order', handleErrors(createOrderValidator), handleToken(['customer', 'administrative']), createOrder )
orderRouter.get('/orderUnique', handleErrors(getOrderValidator), handleToken(['customer', 'administrative', 'seller']), getOrder)
orderRouter.get('/order', handleToken(['customer', 'administrative', 'seller']), getAllOrders )
orderRouter.put('/orderChangeStatus', handleErrors(changeStatusValidator), handleToken(['seller','administrative']), changeStatus)

export default orderRouter