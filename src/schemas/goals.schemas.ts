import * as z from "zod";

import strictParseInt from "../utils/strictParseToInt.ts";


const GoalDataSchema = z.object({

	id: z.string().transform(val => strictParseInt(val)),
	title: z.string(),
	description: z.optional(z.string()),
	timeTotal: z.number().positive(),
	timeLeft: z.number().positive(),
	userID: z.number().positive()	

});

export type GoalData = z.infer<typeof GoalDataSchema>;

const GoalDTOSchema = GoalDataSchema;
export type GoalDTO = z.infer<typeof GoalDTOSchema>;

const GoalCreateDataSchema = GoalDataSchema.omit({
	id: true,
	timeLeft: true
});

export type GoalCreateData = z.infer<typeof GoalCreateDataSchema>;

const GoalUpdateDataSchema = GoalDataSchema.omit({
	id: true,
	userID: true
}).partial();

export type GoalUpdateData = z.infer<typeof GoalUpdateDataSchema>;

export const GoalGetRequestSchema = z.object({

	params: GoalDataSchema.pick({
		id: true
	})

});


export const GoalPostRequestSchema = z.object({

	body: GoalCreateDataSchema 

});

export const GoalPutRequestSchema = z.object({

	params: GoalDataSchema.pick({
		id: true
	}),

	body: GoalUpdateDataSchema 

});

export const GoalDeleteRequestSchema = GoalGetRequestSchema; 
