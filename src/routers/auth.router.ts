
import { Router } from "express";
import prisma from "../../lib/prisma/prisma.client.ts";

import handleErrors from "../middleware/handleErrors.ts";

import validateRequest from "../middleware/validateRequest.ts";
import { LoginRequestSchema } from "../schemas/auth.schemas.ts";

import { AuthService } from "../services/auth.service.ts";
import { AuthController } from "../controllers/auth.controller.ts";

const authService = new AuthService(prisma);
const authController = new AuthController(authService);

const authRouter = Router();

authRouter.post(
	"/login",
	validateRequest(LoginRequestSchema),
	authController.handleLogin.bind(authController),
	handleErrors
);

authRouter.post(
	"/signup",
	validateRequest(LoginRequestSchema),
	authController.handleSignup.bind(authController),
	handleErrors
);

export default authRouter;
