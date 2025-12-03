import type { Request, Response, NextFunction } from "express";
import { logIn, signUp } from "../services/auth.services.ts";
import type { LoginData, SignupData } from "../schemas/auth.schemas.ts";
import type { UserDTO } from "../schemas/users.schemas.ts";

export async function handleSignup(req: Request, res: Response, next: NextFunction) {

	const data: SignupData = req.body;
	const user = await signUp(data); 

	const userDTO: UserDTO = {
		id: user.id,
		username: user.username
	};

	res.status(200).json(userDTO);

}


export async function handleLogin(req: Request, res: Response, next: NextFunction) {

	const data: LoginData = req.body;
	const token = await logIn(data);

	res.setHeader("Authentication", `Bearer: ${token}`);

	res.status(200).json();

}

