import type { Request, Response } from "express";

import { UserService } from "../services/user.service.ts";
import type { UserCreateInput, UserUpdateInput } from "../generated/prisma/models.ts";
import type { UserDTO } from "../schemas/users.schemas.ts";

export class UserController {

	userService: UserService

	constructor(userService: UserService) {

		this.userService = userService

	}

	async handleGetUser(req: Request, res: Response) {

		const id: number = Number(req.params.id) || 0;

		const user = await this.userService.getUserByID(id);

		const userDTO: UserDTO = {
			id: user.id,
			username: user.username
		};

		res.status(200).json(userDTO);	

	}

	async handlePostUser(req: Request, res: Response) {

		const data: UserCreateInput = req.body;

		const user = await this.userService.createUser(data);

		const userDTO: UserDTO = {
			id: user.id,
			username: user.username
		};

		res.status(200).json(userDTO);	

	}
	async handlePutUser(req: Request, res: Response) {

		const id: number = Number(req.params.id) || 0;
		const data: UserUpdateInput = req.body;

		const user = await this.userService.updateUserByID(id, data);

		const userDTO: UserDTO = {
			id: user.id,
			username: user.username
		};

		res.status(200).json(userDTO);	

	}

	async handleDeleteUser(req: Request, res: Response) {

		const id: number = Number(req.params.id) || 0;

		const user = await this.userService.deleteUserByID(id);

		const userDTO: UserDTO = {
			id: user.id,
			username: user.username
		};

		res.status(200).json(userDTO);	

	}

}
