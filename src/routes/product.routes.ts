import { Router } from "express";
import { handleErrors } from "../middelwares/validate.middelware";
import { createProduct, getAllProducts, getProduct, deleteProduct, modifyProduct, stockOut } from "../controllers/product.controller";
import { createProductValidator, getProductValidator, deleteProductValidator, modifyProductValidator, outStockProductValidator } from "../validators/product.validator";
import { handleToken } from "../middelwares/requestToken.middelware";

const productRouter = Router()

productRouter.post('/product', handleErrors(createProductValidator), handleToken(['seller', 'administrative']), createProduct )
productRouter.get('/productUnique/:name', handleErrors(getProductValidator), getProduct)
productRouter.get('/product', getAllProducts )
productRouter.put('/product/:id', handleErrors(modifyProductValidator), handleToken(['seller', 'administrative']), modifyProduct )
productRouter.delete('/product/:id', handleErrors(deleteProductValidator),handleToken(['seller', 'administrative']), deleteProduct)
productRouter.put('/productStock/:id', handleErrors(outStockProductValidator), handleToken(['seller', 'administrative']), stockOut )

export default productRouter