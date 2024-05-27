import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

// const colorVariantSchema = new Schema<TColorVariant>({
//   type: {
//     type: String,
//     enum: ["color"],
//   },
//   value: {
//     type: String,
//     enum: ["Red", "Black", "White", "Blue", "Purple", "Silver"],
//   },
// });

const variantSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["color", "size"],
      required: true,
    },
    value: {
      type: String,
      required: true,
      enum: [
        "Red",
        "Black",
        "White",
        "Blue",
        "Purple",
        "Silver",
        "S",
        "M",
        "L",
      ],
    },
  },
  { _id: false }
);

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [variantSchema],
    required: true,
  },
  inventory: {
    quantity: {
      type: Number,
      required: true,
    },

    inStock: {
      type: Boolean,
      required: true,
    },
  },
});

export const ProductModel = model<TProduct>("product", productSchema);
