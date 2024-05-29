/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import JoiProductValidationSchema from "./product.validation";
import productServices from "./product.services";

//======================Create Product===========================
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const { error, value } = JoiProductValidationSchema.validate(productData);
    if (error) {
      res.status(500).json({
        success: false,
        message: "Failed to product creation",
        error: error.details,
      });
    } else {
      const result = await productServices.createProductInDB(value);
      res.status(200).json({
        success: true,
        message: "Product created successfully!",
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something Worng",
      data: error,
    });
  }
};

//=====================Get All Product=====================
const getProducts = async (req: Request, res: Response) => {
  try {
    const keyword = req.query.searchTerm as string;
    const result = await productServices.getProductFromDB(keyword);
    if (result && keyword) {
      res.status(200).json({
        success: true,
        message: `Products matching search term ${keyword} fetched successfully!`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Data fetch fail",
      data: error,
    });
  }
};

//=====================Get Product By Id=====================
const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productServices.getProductByIdFromDB(id);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Data fetch fail",
      data: error,
    });
  }
};

//=====================Update a Procuct=====================
const productUpdate = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const data = req.body;
    const result = await productServices.updateProductInDB(id, data);
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Product update fail",
      data: error,
    });
  }
};

//=====================Delete a Product=====================
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productServices.deleteProductFromDB(id);
    if (result.deletedCount > 0) {
      res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Fail to product delete",
      data: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getProducts,
  getProductById,
  productUpdate,
  deleteProduct,
};
