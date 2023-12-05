import { Router } from "express";
import {
  getIndex,
  getIndexApi,
  getIndexApiVersion,
} from "../controllers/indexController.js";
import config from "../config.js";

const router = Router();

router.get("/", getIndex);

router.get("/api", getIndexApi);

router.get(`/api/${config.API_VERSION}`, getIndexApiVersion);

export default router;
