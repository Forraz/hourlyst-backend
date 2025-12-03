
import * as z from "zod";
import { UserDataSchema } from "./users.schemas.ts";

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
