import { TOrder } from "./order.interface"
import { OrderModel } from "./order.model"


const createOrderInDB = async (orderData:TOrder)=>{
    const result = await OrderModel.create(orderData)
    return result;
}

const getOrderFromDB = async(email:string)=>{
    if(email){
        const result = await OrderModel.aggregate([
            {$match: {email: email}}
        ])
        return result
    }
    else{
        const result = await OrderModel.find();
    return result;
    }
    
}


export default {
    createOrderInDB,
    getOrderFromDB
}