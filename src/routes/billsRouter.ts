import { Router } from "express";

import schemaValidator from "../middlewares/schemaValidator.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";
import { createBillSchema, updateBillSchema } from "../schemas/billSchema.js";
import {
  getBills,
  getBill,
  createBill,
  updateBill,
  deleteBill,
  createEndDate,
} from "../controllers/billsController.js";

const billsRouter = Router();

billsRouter.use(tokenValidator);

billsRouter.get("/bills/:month/:year", getBills);
billsRouter.get("/bill/:id", getBill);
billsRouter.post("/bills/:id", createEndDate);
billsRouter.post("/bills", schemaValidator(createBillSchema), createBill);
billsRouter.put("/bills/:id", schemaValidator(updateBillSchema), updateBill);
billsRouter.delete("/bills/:billId", deleteBill);

export default billsRouter;
