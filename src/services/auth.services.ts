import jwt from "jsonwebtoken";
import { createHmac } from "crypto";

// TODO: User must get a warning if there is no SECRET_KEY propery in .env  
const SECRET_KEY = process.env.SECRET_KEY || "SECRET_KEY";

const JWT_LIFETIME = process.env.JWT_LIFETIME || "2h";

const ALGORITHM = "sha256";

const hmac = createHmac(ALGORITHM, SECRET_KEY);

export async function handleSignin(username: string, password: string) {

		

}



function generateToken(payload: {}, options: {}) {

	const token = jwt.sign(payload, SECRET_KEY, options);	

	return token;

}

// TODO: Handle verification errors
export function verifyToken(token: string) {

	const payload = jwt.verify(token, SECRET_KEY);

	return payload;
}

