import { Router } from "express";
import { handleErrors } from "../middelwares/validate.middelware";
import { loginValidator, registerValidator } from "../validators/auth.validator";
import { login, register } from "../controllers/auth.controller";

const authRouter = Router()

authRouter.post('/login', handleErrors(loginValidator), login )
authRouter.post('/register', handleErrors(registerValidator), register)

export default authRouter