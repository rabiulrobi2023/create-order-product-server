import { Schema, model } from "mongoose";
import { TProduct, TVariant } from "./product.interface";

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

const variantSchema = new Schema<TVariant>(
  {
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
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
productSchema.index({
  name: "text",
  description: "text",
  tags: "text",
  category: "text",
});
export const ProductModel = model<TProduct>("product", productSchema);
