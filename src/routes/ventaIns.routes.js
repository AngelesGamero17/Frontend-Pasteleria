import { Router } from "express";
import {
  getVentaInsumo,
  createVentaInsumo,
  getOneVentaInsumo,
  updateVentaInsumo,
  deleteVentaInsumo,
} from "../controllers/VentaInsController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getVentaInsumo);

router.post("/",requireToken, createVentaInsumo);

router.get("/:ID",getOneVentaInsumo);

router.put("/:ID",requireToken,updateVentaInsumo);

router.delete("/:ID", requireToken,deleteVentaInsumo);

export default router;