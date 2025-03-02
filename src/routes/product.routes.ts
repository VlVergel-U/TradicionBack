import { Router } from "express";
import { handleErrors } from "../middelwares/validate.middelware";
import { createProduct, getAllProducts, getProduct, deleteProduct, modifyProduct } from "../controllers/product.controller";
import { createProductValidator, getProductValidator, deleteProductValidator, modifyProductValidator } from "../validators/product.validator";
import { handleToken } from "../middelwares/requestToken.middelware";

const productRouter = Router()

productRouter.post('/product', handleErrors(createProductValidator), handleToken(['seller', 'administrative']), createProduct )
productRouter.get('/productUnique/:id', handleErrors(getProductValidator), getProduct)
productRouter.get('/product', getAllProducts )
productRouter.put('/product/:id', handleErrors(modifyProductValidator), handleToken(['seller', 'administrative']), modifyProduct )
productRouter.delete('/product/:id', handleErrors(deleteProductValidator),handleToken(['seller', 'administrative']), deleteProduct)


export default productRouter