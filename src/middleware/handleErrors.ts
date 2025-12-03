
import type { Request, Response, NextFunction } from "express";

export default async function handleErrors(err: Error, req: Request, res: Response, next: NextFunction) {

	const errorDescription = err.message;
	let statusCode;

	switch (true) {

		case err instanceof ReferenceError: 
			statusCode = 404;
			break;
		
		case err instanceof TypeError:
			statusCode = 400;
			break;

	}

	res.status(statusCode || 500).json({"error": errorDescription});

}
