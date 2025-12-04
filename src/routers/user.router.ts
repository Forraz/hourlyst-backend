import { Router } from "express";
import prisma from "../../lib/prisma/prisma.client.ts";

import handleErrors from "../middleware/handleErrors.ts";

import validateRequest from "../middleware/validateRequest.ts";
import { UserGetRequestSchema, UserPostRequestSchema, UserPutRequestSchema, UserDeleteRequestSchema } from "../schemas/users.schemas.ts";

import { UserController } from "../controllers/user.controller.ts";
import { UserService } from "../services/user.service.ts";



const userRouter = Router();
const userService = new UserService(prisma);
const userController = new UserController(userService);

userRouter.get(
	"/:id",
	validateRequest(UserGetRequestSchema),
	userController.handleGetUser.bind(userController),
	handleErrors
);

userRouter.post(
	"/",
	validateRequest(UserPostRequestSchema),
	userController.handlePostUser,
	handleErrors
);

userRouter.put(
	"/:id",
	validateRequest(UserPutRequestSchema),
	userController.handlePutUser,
	handleErrors
);

userRouter.delete(
	"/:id",
	validateRequest(UserDeleteRequestSchema),
	userController.handleDeleteUser,
	handleErrors
);

export default userRouter;
