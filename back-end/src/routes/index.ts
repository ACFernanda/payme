import { Router } from "express";

import authRouter from "./authRouter.js";
// import billsRouter from "./billsRouter.js";

const router = Router();

router.use(authRouter);
// router.use(billsRouter);

export default router;
