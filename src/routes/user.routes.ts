import { Router } from "express";
import { createUserValidator, getUserValidator, modifyUserValidator} from "../validators/user.validator";
import { handleErrors } from "../middelwares/validate.middelware";
import { createUser, getAllUsers, getUser, modifyUser } from "../controllers/user.controller";

const userRouter = Router()

userRouter.post('/user', handleErrors(createUserValidator), createUser )
userRouter.get('/userUnique', handleErrors(getUserValidator), getUser )
userRouter.get('/user', getAllUsers )
userRouter.put('/user', handleErrors(modifyUserValidator), modifyUser )


export default userRouter