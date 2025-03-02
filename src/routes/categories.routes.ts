import { Router } from "express";
import { getAllCategories, deleteCategory } from "../controllers/category_product.controller";
import { deleteCategoryProductValidator } from "../validators/category_product.validator";
import { handleErrors } from "../middelwares/validate.middelware";


const categoryRouter = Router()

categoryRouter.get('/category', getAllCategories )
categoryRouter.get('/category/:name', handleErrors(deleteCategoryProductValidator), deleteCategory )

export default categoryRouter