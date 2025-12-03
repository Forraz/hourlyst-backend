import { Router } from "express";
import { handleGetUser, handlePostUser, handlePutUser, handleDeleteUser } from "../controllers/users.controllers.ts";
import handleErrors from "../middleware/handleErrors.ts";
import validateRequest from "../middleware/validateRequest.ts";
import { UserGetRequestSchema, UserPostRequestSchema, UserPutRequestSchema, UserDeleteRequestSchema } from "../schemas/users.schemas.ts";

const users = Router();

users.get("/:id", validateRequest(UserGetRequestSchema), handleGetUser, handleErrors);
users.post("/", validateRequest(UserPostRequestSchema), handlePostUser, handleErrors);
users.put("/:id", validateRequest(UserPutRequestSchema), handlePutUser, handleErrors);
users.delete("/:id", validateRequest(UserDeleteRequestSchema), handleDeleteUser, handleErrors);

export default users;
