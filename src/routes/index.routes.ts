import { Router } from "express";
import userRouter from "./user.routes";
import authRouter from "./auth.routes";
import productRouter from "./product.routes";
import categoryRouter from "./categories.routes";
import orderRouter from "./order.routes";

const router = Router()

router.use('/api', userRouter, categoryRouter)
router.use('/auth', authRouter)
router.use('/tradicion', productRouter, orderRouter)

//route not found
router.use((req, res) => {
    res.status(404).json({ message: "Invalid route" });
});

export default router;