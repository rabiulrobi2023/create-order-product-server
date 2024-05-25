import { Schema } from "mongoose";
import {
  TColorVariant,
  TProduct,
  TSizeVariant,
  TVariant,
} from "./product.interface";

const colorVariantSchema = new Schema<TColorVariant>({
  type: {
    type: String,
    enum: ["color"],
  },
  value: {
    type: String,
    enum: ["Red", "Black", "White", "Blue", "Purple", "Silver"],
  },
});

const sizeVariantSchema = new Schema<TSizeVariant>({
  type: {
    type: String,
    enum: ["size"],
  },
  value: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

const variantSchema = new Schema<TVariant>({
  type: [sizeVariantSchema, colorVariantSchema],
});

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  tags: {
    type: [String],
  },
  variants: {
    type: [variantSchema],
  },
});
