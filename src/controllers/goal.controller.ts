import type { Request, Response } from "express";

import { GoalService } from "../services/goal.service.ts";
import type { GoalCreateData, GoalUpdateData } from "../schemas/goals.schemas.ts";

export class GoalController {

	goalService: GoalService

	constructor(goalService: GoalService) {

		this.goalService = goalService;

	}

	async handleGetGoal(req: Request, res: Response) {

		const id = Number(req.params.id) || 0;

		const goal = await this.goalService.getGoalByID(id);

		res.status(200).json(goal);

	}

	async handlePostGoal(req: Request, res: Response) {

		const data: GoalCreateData = req.body;

		const goal = await this.goalService.createGoal(data);

		res.status(201).json(goal);

			
	}

	async handlePutGoal(req: Request, res: Response) {

		const id = Number(req.params.id) || 0;
		const data: GoalUpdateData = req.body;

		const goal = await this.goalService.updateGoalByID(id, data);

		res.status(200).json(goal);

	}

	async handleDeleteGoal(req: Request, res: Response) {

		const id = Number(req.params.id) || 0;

		const goal = await this.goalService.deleteGoalByID(id);

		res.status(200).json(goal);


	}

}
