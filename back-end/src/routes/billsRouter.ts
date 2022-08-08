import { Router } from "express";

import schemaValidator from "../middlewares/schemaValidator.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";
import { createBillSchema, updateBillSchema } from "../schemas/billSchema.js";
import {
  getBills,
  createBill,
  updateBill,
  deleteBill,
} from "../controllers/billsController.js";

const billsRouter = Router();

billsRouter.use(tokenValidator);

billsRouter.get("/bills/:month/:year", getBills);
billsRouter.post("/bills", schemaValidator(createBillSchema), createBill);
billsRouter.put("/bills/:id", schemaValidator(updateBillSchema), updateBill);
billsRouter.delete("/transactions/:id", deleteBill);

export default billsRouter;
