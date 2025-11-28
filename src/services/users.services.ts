
import prisma from "../../lib/prisma/prisma.client.ts";
import { type User } from "../generated/prisma/client.ts";
import { PrismaClientKnownRequestError } from "../generated/prisma/internal/prismaNamespace.ts";
import { type UserCreateInput, type UserUpdateInput } from "../generated/prisma/models.ts";


export async function getUserByID(id: number): Promise<User> {

	const user = await prisma.user.findUnique({

		where: {
			id: id
		},

	});

	if (!user) { throw new ReferenceError("User not found") }

	return user;

}

export async function createUser(data: UserCreateInput): Promise<User> {

	const user = await prisma.user.create({ data: data });

	return user;
		
}

export async function updateUserByID(id: number, data: UserUpdateInput): Promise<User> {

	let user: User;

	try {

		user = await prisma.user.update({
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

export async function deleteUserByID(id: number): Promise<User> {

	let user: User;

	try {

		user = await prisma.user.delete({
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
