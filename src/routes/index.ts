import { Router } from "express";

import authRouter from "./authRouter.js";
import billsRouter from "./billsRouter.js";
import testsRouter from "./testsRouter.js";

const router = Router();

router.use(authRouter);
router.use(billsRouter);

if (process.env.NODE_ENV == "test") {
  router.use(testsRouter);
}

export default router;
