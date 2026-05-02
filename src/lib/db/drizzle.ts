import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

// Constants & Variables
import * as MchSchema from "./schema";
const connectionString = process.env.DATABASE_URL as string;
const pool = new Pool({ connectionString });
const schema = { ...MchSchema };



export const db = drizzle({
	client: pool,
	schema,
});