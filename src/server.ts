import bodyParser from "body-parser";
import express from "express"
import "dotenv/config";

import users from "./routes/users.routes.ts";
import auth from "./routes/auth.routes.ts";
import goals from "./routes/goals.routes.ts";

const PORT = process.env.PORT || 3000;
const API_PATH = "/api";

const server = express();

server.use(bodyParser.json());

server.use(API_PATH + "/users", users);
server.use(API_PATH + "/goals", goals);
server.use(API_PATH + "/auth", auth);

server.listen(PORT, () => {

	console.log(`Listening to: ${PORT}`);

});
