
import type { Request, Response, NextFunction } from "express";
import { createUser, deleteUserByID, getUserByID, updateUserByID } from "../services/users.services.ts";
import type { UserCreateInput, UserUpdateInput } from "../generated/prisma/models.ts";
import type { UserDTO } from "../schemas/users.schemas.ts";

export async function handleGetUser(req: Request, res: Response) {

	const id: number = Number(req.params.id) || 0;

	const user = await getUserByID(id);

	const userDTO: UserDTO = {
		id: user.id,
		username: user.username
	};

	res.status(200).json(userDTO);	

}
export async function handlePostUser(req: Request, res: Response) {

	const data: UserCreateInput = req.body;

	const user = await createUser(data);

	const userDTO: UserDTO = {
		id: user.id,
		username: user.username
	};

	res.status(200).json(userDTO);	

}
export async function handlePutUser(req: Request, res: Response) {

	const id: number = Number(req.params.id) || 0;
	const data: UserUpdateInput = req.body;

	const user = await updateUserByID(id, data);

	const userDTO: UserDTO = {
		id: user.id,
		username: user.username
	};

	res.status(200).json(userDTO);	

}
export async function handleDeleteUser(req: Request, res: Response) {

	const id: number = Number(req.params.id) || 0;

	const user = await deleteUserByID(id);

	const userDTO: UserDTO = {
		id: user.id,
		username: user.username
	};

	res.status(200).json(userDTO);	

}
