
import * as z from "zod";
import strictParseInt from "../utils/strictParseToInt.ts";

const UserDataSchema = z.object({

	id: z.string().transform(val => strictParseInt(val)),
	username: z.string().min(5),
	password: z.string().min(8)

});

const LoginDataSchema = UserDataSchema.pick({

	username: true,
	password: true

});

export type LoginData = z.infer<typeof LoginDataSchema>;

const SignupDataSchema = UserDataSchema.pick({

	username: true,
	password: true

});

export type SignupData = z.infer<typeof SignupDataSchema>;

export const LoginRequestSchema = z.object({

	body: LoginDataSchema,

});

export const SignupRequestSchema = z.object({

	body: SignupDataSchema,

});
