import { Router } from "express";
import { handleErrors } from "../middelwares/validate.middelware";
import { loginValidator } from "../validators/auth.validator";
import { login } from "../controllers/auth.controller";

const authRouter = Router()

authRouter.post('/login', handleErrors(loginValidator), login )
authRouter.post('/register', handleErrors(loginValidator), login )

export default authRouter