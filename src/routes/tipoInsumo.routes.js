import { Router } from "express";
import {
  getTipoInsumo,
  createTipoInsumo,
  getOneTipoInsumo,
  updateTipoInsumo,
  deleteTipoInsumo,
} from "../controllers/tipoInsumoController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getTipoInsumo);

router.post("/", requireToken,createTipoInsumo);

router.get("/:ID", getOneTipoInsumo);

router.put("/:ID",requireToken ,updateTipoInsumo);

router.delete("/:ID", requireToken,deleteTipoInsumo);

export default router;