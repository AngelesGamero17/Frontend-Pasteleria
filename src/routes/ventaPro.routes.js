import { Router } from "express";
import {
  getVentaProducto,
  createVentaProducto,
  getOneVentaProducto,
  updateVentaProducto,
  deleteVentaProducto,
} from "../controllers/VentaProController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getVentaProducto);

router.post("/",requireToken ,createVentaProducto);

router.get("/:ID", getOneVentaProducto);

router.put("/:ID",requireToken, updateVentaProducto);

router.delete("/:ID",requireToken, deleteVentaProducto);

export default router;