import { Router } from "express";
import {
  getTipoEmpleado,
  createTipoEmpleado,
  getOneTipoEmpleado,
  updateTipoEmpleado,
  deleteTipoEmpleado,
} from "../controllers/tipoEmpleadoController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getTipoEmpleado);

router.post("/",createTipoEmpleado);

router.get("/:ID", getOneTipoEmpleado);

router.put("/:ID", requireToken,updateTipoEmpleado);

router.delete("/:ID", requireToken,deleteTipoEmpleado);

export default router;