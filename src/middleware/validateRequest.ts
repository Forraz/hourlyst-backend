import * as z from "zod";
import type { Request, Response, NextFunction } from "express"; 


export default function validateRequest(schema: z.ZodObject) {

	return (req: Request, res: Response, next: NextFunction) => {

		const result = schema.safeParse(req);

		if (!result.success) {
			throw TypeError(z.prettifyError(result.error));

		}

		next();

	};

}

