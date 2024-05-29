import express, { Application } from "express";
import cors from "cors"
import { ProductRouter } from "./app/modules/product/product.router";
import { OrderRouter } from "./app/modules/order/order.router";

const app: Application = express();
app.use(cors())
app.use(express.json())
app.use(express.text())

app.use('/api', ProductRouter )
app.use('/api', OrderRouter)

app.get("/",(req,res)=>{res.send("Product server is running")})


export default app


