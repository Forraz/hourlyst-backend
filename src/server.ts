import bodyParser from "body-parser";
import express from "express"
import "dotenv/config";

import authRouter from "./routers/auth.router.ts";
import userRouter from "./routers/user.router.ts";
import goalRouter from "./routers/goal.router.ts";


const PORT = process.env.PORT || 3000;
const API_PATH = "/api";

const server = express();

server.use(bodyParser.json());

server.use(API_PATH + "/users", userRouter);
server.use(API_PATH + "/goals", goalRouter);
server.use(API_PATH + "/auth", authRouter);

server.listen(PORT, () => {

	console.log(`Listening to: ${PORT}`);

});
