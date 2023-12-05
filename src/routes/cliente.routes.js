import { Router } from "express";
import {
  getCliente,
  createCliente,
  getOneCliente,
  updateCliente,
  deleteCliente,
} from "../controllers/clienteController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getCliente);

router.post("/",requireToken, createCliente);

router.get("/:ID", getOneCliente);

router.put("/:ID",requireToken, updateCliente);

router.delete("/:ID",requireToken, deleteCliente);

export default router;