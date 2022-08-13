import { Router } from "express";

import {
  deleteAllUsers,
  deleteAllBills,
} from "../controllers/testsController.js";

const testsRouter = Router();

testsRouter.post("/reset-database/users", deleteAllUsers);
testsRouter.post("/reset-database/bills", deleteAllBills);

export default testsRouter;
