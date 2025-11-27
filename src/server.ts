import bodyParser from "body-parser";
import express from "express"
import "dotenv/config";

const PORT = process.env.PORT || 3000;

const server = express();

server.use(bodyParser.json());

server.listen(PORT, () => {

	console.log(`Listening to: ${PORT}`);

});
