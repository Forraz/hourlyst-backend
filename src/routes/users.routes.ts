import { Router } from "express";
import { handleGetUser, handlePostUser, handlePutUser, handleDeleteUser } from "../controllers/users.controllers.ts";

const users = Router();

users.get("/:id", handleGetUser);
users.post("/", handlePostUser);
users.put("/:id", handlePutUser);
users.delete("/:id", handleDeleteUser);

export default users;
