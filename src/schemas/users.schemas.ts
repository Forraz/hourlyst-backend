import * as z from "zod";
import strictParseInt from "../utils/strictParseToInt.ts";

export const UserDataSchema = z.object({

	id: z.string().transform(val => strictParseInt(val)),
	username: z.string().min(5),
	password: z.string().min(8)

});

const UserDTOSchema = UserDataSchema.pick({

	id: true,
	username: true

});

export type UserDTO = z.infer<typeof UserDTOSchema>;


export const UserGetRequestSchema = z.object({

	params: UserDataSchema.pick({
		id: true
	}),

}); 


export const UserPostRequestSchema = z.object({

	body: UserDataSchema.pick({
		username: true,
		password: true
	}),

});

export const UserPutRequestSchema = z.object({

	params: UserDataSchema.pick({
		id: true
	}),
	body: UserDataSchema.partial(),

});

export const UserDeleteRequestSchema = UserGetRequestSchema;
