import { ObjectId } from "mongodb";
import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductInDB = async (productData: TProduct) => {
  const result = ProductModel.create(productData);
  return result;
};

const getProductFromDB = async (keyword: string) => {
  if (keyword) {
    const result = await ProductModel.find({
      $text: { $search: keyword },
    });
    return result;
  } else {
    const result = await ProductModel.find();
    return result;
  }
};

const getProductByIdFromDB = async (id: string) => {
  const result = ProductModel.aggregate([
    { $match: { _id: new ObjectId(id) } },
  ]);
  return result;
};

const updateProductInDB = async (id: string, data: TProduct) => {
  const result = ProductModel.updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = ProductModel.deleteOne({ _id: new ObjectId(id) });
  return result;
};
const partialProductUpdateInDB = async (
  id: string,
  updatedQuantity: number
) => {
  const result = ProductModel.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        "inventory.quantity": updatedQuantity,
        "inventory.inStock": updatedQuantity ? true : false,
      },
    }
  );
  return result;
};

export default {
  createProductInDB,
  getProductFromDB,
  getProductByIdFromDB,
  updateProductInDB,
  deleteProductFromDB,
  partialProductUpdateInDB,
};
