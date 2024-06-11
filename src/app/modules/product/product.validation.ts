import Joi from "joi";

// Define a Joi schema for variants
// const variantJoiSchema = Joi.object({
//   type: Joi.string().valid("color", "size").required(),
//   value: Joi.alternatives().conditional("type", {
//     is: "color",
//     then: Joi.string()
//       .valid("Red", "Black", "White", "Blue", "Purple", "Silver")
//       .required(),
//     otherwise: Joi.string().valid("S", "M", "L").required(),
//   }),
// });

const variantJoiSchema = Joi.object({
  type: Joi.string().required(),
  value: Joi.string().required()
})

// Define a Joi schema for the product
const JoiProductValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
  variants: Joi.array().items(variantJoiSchema).required(),
  inventory: Joi.object({
    quantity: Joi.number().required(),
    inStock: Joi.boolean().required(),
  }).required(),
});

export default JoiProductValidationSchema;
