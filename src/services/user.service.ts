import { PrismaClient } from "../generated/prisma/client.ts";
import { PrismaClientKnownRequestError } from "../generated/prisma/internal/prismaNamespace.ts";
import type { UserCreateInput, UserUpdateInput } from "../generated/prisma/models.ts";


export class UserService {

	prisma: PrismaClient

	constructor(prismaClient: PrismaClient) {

		this.prisma = prismaClient;

	}

	async getUserByID(id: number) {

		const user = await this.prisma.user.findUnique({

			where: {
				id: id
			},

		});

		if (!user) { throw new ReferenceError("User not found") }

		return user;

	}

	async getUserByUsername(username: string) {

		const user = await this.prisma.user.findUnique({
			where: {
				username: username
			}
		});

		if (!user) { throw new ReferenceError("User not found") }

		return user;

	};

	async createUser(data: UserCreateInput) {

		const user = await this.prisma.user.create({ data: data });

		return user;
			
	}

	async updateUserByID(id: number, data: UserUpdateInput) {

		let user;

		try {

			user = await this.prisma.user.update({
				where: {
					id: id
				},
				data: data
			});

		} catch (error) {
		 
			if (error instanceof PrismaClientKnownRequestError) {

				throw new ReferenceError("User not found"); 

			} else throw error

		};


		return user;

	}

	async deleteUserByID(id: number) {

		let user;

		try {

			user = await this.prisma.user.delete({
				where: {
					id: id
				}
			});

		} catch (error) {
		 
			if (error instanceof PrismaClientKnownRequestError) {

				throw new ReferenceError("User not found"); 

			} else throw error

		};


		return user;

	}

}
