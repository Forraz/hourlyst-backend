import { Router } from "express";
import prisma from "../../lib/prisma/prisma.client.ts";

import handleErrors from "../middleware/handleErrors.ts";

import validateRequest from "../middleware/validateRequest.ts";
import { GoalDeleteRequestSchema, GoalGetRequestSchema, GoalPostRequestSchema, GoalPutRequestSchema } from "../schemas/goals.schemas.ts";

import { GoalService } from "../services/goal.service.ts";
import { GoalController } from "../controllers/goal.controller.ts";

const goalRouter = Router();

const goalService = new GoalService(prisma);
const goalController = new GoalController(goalService);

goalRouter.get(
	"/:id",
	validateRequest(GoalGetRequestSchema),
	goalController.handleGetGoal.bind(goalController),
	handleErrors
);

goalRouter.post(
	"/",
	validateRequest(GoalPostRequestSchema),
	goalController.handlePostGoal.bind(goalController),
	handleErrors
);

goalRouter.put(
	"/:id",
	validateRequest(GoalPutRequestSchema),
	goalController.handlePutGoal.bind(goalController),
	handleErrors
);

goalRouter.delete(
	"/:id",
	validateRequest(GoalDeleteRequestSchema),
	goalController.handleDeleteGoal.bind(goalController),
	handleErrors
);

export default goalRouter;
