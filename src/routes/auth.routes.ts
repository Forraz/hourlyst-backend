
import { Router } from "express";
import validateRequest from "../middleware/validateRequest.ts";
import { handleLogin, handleSignup } from "../controllers/auth.controllers.ts";
import handleErrors from "../middleware/handleErrors.ts";
import { LoginRequestSchema } from "../schemas/auth.schemas.ts";

const auth = Router();

auth.post("/login", validateRequest(LoginRequestSchema), handleLogin, handleErrors);
auth.post("/signup", validateRequest(LoginRequestSchema), handleSignup, handleErrors);

export default auth;
