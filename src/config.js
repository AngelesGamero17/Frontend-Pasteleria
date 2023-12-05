import dotenv from "dotenv";
dotenv.config();

export default {
  // server config
  DB_NAME: process.env.DB_NAME || "dbpasteleria",
  DB_USER: process.env.DB_USER || "pasteleria",
  DB_PASS: process.env.DB_PASS || "pasteleria1.",
  DB_HOST: process.env.DB_HOST || "localhost",
  APP_PORT: process.env.APP_PORT || 4000,
  APP_HOST: process.env.APP_HOST || "localhost",
  API_VERSION: process.env.API_VERSION || "v1",
  JWT_SECRET: process.env.JWT_SECRET || "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
};
