import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../services/auth.services.ts";

export default function authenticateRequest() {

	return (req: Request, res: Response, next: NextFunction) => {

		const rawToken = req.header("Authorization");

		if (!rawToken) { throw ReferenceError("Not authenticated"); };

		const token = rawToken.split(" ")[1];

		if (!token) { throw ReferenceError("Not authenticated"); };

		verifyToken(token);
		

		next();

	};

};
