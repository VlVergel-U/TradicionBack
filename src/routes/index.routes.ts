import { Router } from "express";
import customerRouter from "./user.routes";
import authRouter from "./auth.routes";

const router = Router()

router.use('/api', customerRouter)
router.use('/auth', authRouter)

export default router;