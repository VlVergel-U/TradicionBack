import { Router } from "express";
import { handleToken } from "./requestToken.middelware";

const ValidateRoutes = Router()

ValidateRoutes.use("/api", handleToken(['administrative']))

export default ValidateRoutes


