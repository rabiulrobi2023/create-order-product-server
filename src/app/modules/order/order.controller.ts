/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import orderServices from "./order.services";
import JoiOrderValidation from "./order.validation";
import productServices from "../product/product.services";

//========================Create Order=============================
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const orderId = orderData.productId
    const { error, value } = JoiOrderValidation.validate(orderData);
    if (error) {
      res.status(500).json({
        success: false,
        message: "Falil Create Order",
        error: error.details,
      });
    } else {
    const product = await productServices.getProductByIdFromDB(orderId);
    const productId = product[0]._id
    const productQuantity = product[0].inventory.quantity;
    const orderQuantity = orderData.quantity;
    const remaining = productQuantity-orderQuantity;
    

      if (remaining>=0) {
        const result = await orderServices.createOrderInDB(value);
        res.status(200).json({
          success: true,
          message: "Order created successfully!",
          data: result,
        });
       
       await productServices.partialProductUpdateInDB(productId,remaining)
      } else {
        res.status(500).json({
          success: false,
          message: "Insufficient quantity available in inventory",
        });
      } 
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message:  "Order not found",
      data: err
    });
  }
};

//========================Get All Order=============================
const getAllOrder = async(req:Request, res:Response)=>{
    
    try{
        const email =req.query.email as string
        const result = await orderServices.getOrderFromDB(email)
        if(result && email){
            res.status(200).json({
                success: true,
                message: result.length>0? "Orders fetched successfully for user email!":"There is no any order for user email",
                data: result
            })
        }       
        else{
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result
            })
        }
    }
    catch (error: any) {
        res.status(500).json({
          success: false,
          message: error.message || "There is no any order",
          data: error,
        });
      }
}




export const OrderController = {
  createOrder,
  getAllOrder,
};
