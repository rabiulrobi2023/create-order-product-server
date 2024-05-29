import { ObjectId } from "mongodb";
import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductInDB = async (productData:TProduct)=>{
    const result = ProductModel.create(productData);
    return result
}

const getProductFromDB = async ()=>{
    const result = ProductModel.find();
    return result;
}

const getProductByIdFromDB = async(id:string)=>{
    const result = ProductModel.aggregate([{$match:{_id: new ObjectId(id)}}]);
    return result;
}

const updateProductInDB = async (id: string, data:TProduct)=>{
    const result = ProductModel.findByIdAndUpdate(id,data);
    return result;
}

export default {
    createProductInDB,
    getProductFromDB,
    getProductByIdFromDB,
    updateProductInDB
}