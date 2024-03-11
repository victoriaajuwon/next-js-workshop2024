import { createClient } from "@libsql/client";
import "dotenv/config";

export const client = createClient({
  url: process.env.TURSO_URL,
  authToken: process.env.TURSO_TOKEN,
});
