import jwt from "jsonwebtoken";
import { createHmac } from "crypto";
import { createUser, getUserByUsername } from "./users.services.ts";
import type { LoginData, SignupData } from "../schemas/auth.schemas.ts";

// TODO: User must get a warning if there is no SECRET_KEY propery in .env  
const SECRET_KEY = process.env.SECRET_KEY || "SECRET_KEY";
const JWT_LIFETIME = process.env.JWT_LIFETIME || "2h";
const ALGORITHM = "sha256";


export async function logIn(data: LoginData) {

	const hmac = createHmac(ALGORITHM, SECRET_KEY);
	hmac.update(data.password);

	const password_hash = hmac.digest("hex");

	const user = await getUserByUsername(data.username);

	if (!user) { throw new ReferenceError("User not found") };

	if (user.password_hash != password_hash) { throw new ReferenceError("Wrong password or username")};

	const payload = { 
		sub: user.id
	};

	const options: jwt.SignOptions  = {
		expiresIn: JWT_LIFETIME as any
	};

	const token = generateToken(payload, options);

	return token;

}

export async function signUp(data: SignupData) {

	const hmac = createHmac(ALGORITHM, SECRET_KEY);
	hmac.update(data.password);

	const password_hash = hmac.digest("hex");

	const user = createUser({ 
		username: data.username,
		password_hash: password_hash
	});

	return user;

}


function generateToken(payload: {}, options: jwt.SignOptions) {

	const token = jwt.sign(payload, SECRET_KEY, options);

	return token;

}

export function verifyToken(token: string) {

	console.log(token);

	const payload = jwt.verify(token, SECRET_KEY);

	return payload;
}

