import productSeervice from "./product.seervice";
import JoiProductValidationSchema from "./product.validation";

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
      const result = await productSeervice.createProductInDB(value);
      res.status(200).json({
        success: true,
        message: "Product created successfully!",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Something Worng",
      data: error,
    });
  }
};

export const ProductController = {
  createProduct,
};
