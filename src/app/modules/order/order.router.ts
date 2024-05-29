
import  express  from 'express';
import { OrderController } from './order.controller';

const router = express.Router()
export const createOrder = router.post("/orders", OrderController.createOrder)
export const getOrders = router.get('/orders', OrderController.getAllOrder)
export const getOrdersByEmail = router.get("/orders")

export const OrderRouter = router;