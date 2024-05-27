import productSeervice from "./product.seervice";
import JoiProductValidationSchema from "./product.validation";

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

//=====================Get Product=====================
const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await productSeervice.getProductFromDB();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Data fetch fail",
      data: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getProducts
};
