
import type { Request, Response, NextFunction } from "express";
import { createUser, deleteUserByID, getUserByID, updateUserByID } from "../services/users.services.ts";
import type { UserCreateInput, UserUpdateInput } from "../generated/prisma/models.ts";

export async function handleGetUser(req: Request, res: Response) {

	const id: number = Number(req.params.id) || 0;

	const user = await getUserByID(id);

	res.status(200).json(user);	

}
export async function handlePostUser(req: Request, res: Response) {

	const data: UserCreateInput = req.body;

	const user = await createUser(data);

	res.status(200).json(user);	

}
export async function handlePutUser(req: Request, res: Response) {

	const id: number = Number(req.params.id) || 0;
	const data: UserUpdateInput = req.body;

	const user = await updateUserByID(id, data);

	res.status(200).json(user);	

}
export async function handleDeleteUser(req: Request, res: Response) {

	const id: number = Number(req.params.id) || 0;

	const user = await deleteUserByID(id);

	res.status(200).json(user);	

}
