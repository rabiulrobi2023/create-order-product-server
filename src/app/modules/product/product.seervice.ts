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

export default {
    createProductInDB,
    getProductFromDB
}