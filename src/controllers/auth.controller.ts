import type { Request, Response } from "express";

import { AuthService } from "../services/auth.service.ts";
import type { LoginData, SignupData } from "../schemas/auth.schemas.ts";
import type { UserDTO } from "../schemas/users.schemas.ts";

export class AuthController {

	authService: AuthService

	constructor(authService: AuthService) {
	
		this.authService = authService;

	}
		
	async handleSignup(req: Request, res: Response) {

		const data: SignupData = req.body;
		const user = await this.authService.signUp(data); 

		const userDTO: UserDTO = {
			id: user.id,
			username: user.username
		};

		res.status(200).json(userDTO);

	}


	async handleLogin(req: Request, res: Response) {

		const data: LoginData = req.body;
		const token = await this.authService.logIn(data);

		res.setHeader("Authentication", `Bearer: ${token}`);

		res.status(200).json();

	}
}
