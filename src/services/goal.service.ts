import { PrismaClient } from "../generated/prisma/client.ts";
import type { GoalCreateData, GoalUpdateData } from "../schemas/goals.schemas.ts";

export class GoalService {

	prisma: PrismaClient

	constructor(prismaClient: PrismaClient) {

		this.prisma = prismaClient;

	}

	async getGoalByID(id: number) {

		const goal = await this.prisma.goal.findUnique({
			where: {
				id: id
			}
		});

		return goal;

	}

	async createGoal(data: GoalCreateData) {

		const goalData: any = {
			title: data.title,
			description: data.description,
			timeTotal: data.timeTotal,
			timeLeft: data.timeTotal,
			user: {
				connect: {
					id: data.userID
				}
			}		 	
		}
		
		const goal = await this.prisma.goal.create({ data: goalData });

		return goal;

	}

	async updateGoalByID(id: number, data: GoalUpdateData) {

		// TODO: Fix update to undefined 
		const goalData: any = {
			title: data.title,
			description: data.description,
			timeTotal: data.timeTotal,
			timeLeft: data.timeTotal,
			user: {
				connect: {
					id: data.userID
				}
			}		 	
		};

		const goal = await this.prisma.goal.update({
			where: {
				id: id
			}, data: goalData
		});	

		return goal;

	}

	async deleteGoalByID(id: number) {
		
		const goal = await this.prisma.goal.delete({
			where: {
				id: id
			}
		});

		return goal;

	}

}

