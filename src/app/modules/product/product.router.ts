import express from "express";
import { ProductController } from "./product.controller";

const routes = express.Router();

export const createProduct = routes.post("/products",ProductController.createProduct);
export const getProducts =routes.get("/products", ProductController.getProducts);


export const ProductRouter = routes;
