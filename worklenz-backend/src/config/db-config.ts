const password = process.env.DB_PASSWORD;

if (!password) {
  throw new Error("DB_PASSWORD is missing or not loaded");
}

/*
console.log("FINAL DB CONFIG:", {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});
*/

export default {
  user: process.env.DB_USER || "postgres",
  password,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  max: +(process.env.DB_MAX_CLIENTS as string),
  idleTimeoutMillis: 30000,
};

//console.log("DB_PASSWORD =", process.env.DB_PASSWORD);
