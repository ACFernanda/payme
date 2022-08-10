import { Router } from "express";

import schemaValidator from "../middlewares/schemaValidator.js";
import { signUpSchema, signInSchema } from "../schemas/authSchema.js";
import { signUp, signIn } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", schemaValidator(signUpSchema), signUp);
authRouter.post("/sign-in", schemaValidator(signInSchema), signIn);

export default authRouter;
