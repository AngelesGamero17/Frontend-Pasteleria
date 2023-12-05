import { Router } from "express";
import {
  getTipoProducto,
  createTipoProducto,
  getOneTipoProducto,
  updateTipoProducto,
  deleteTipoProducto,
} from "../controllers/tipoProductoController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getTipoProducto);

router.post("/", requireToken,createTipoProducto);

router.get("/:ID", getOneTipoProducto);

router.put("/:ID",requireToken ,updateTipoProducto);

router.delete("/:ID", requireToken,deleteTipoProducto);

export default router;