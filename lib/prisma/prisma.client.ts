import "dotenv/config";
import { PrismaClient } from "../../src/generated/prisma/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";

const DB_URL = `${process.env.DATABASE_URL}` || "";

const adapter: PrismaPg = new PrismaPg({ connectionString: DB_URL });
const prisma: PrismaClient = new PrismaClient({ adapter });

export default prisma;
