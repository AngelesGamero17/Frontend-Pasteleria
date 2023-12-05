import { Router } from "express";
import {
    getImagen,
    createImagen,
    getOneImagen,
    updateImagen,
    deleteImagen,
} from "../controllers/imagenController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getImagen);

router.post("/", requireToken, createImagen);

router.get("/:ID", getOneImagen);

router.put("/:ID", requireToken, updateImagen);

router.delete("/:ID", requireToken, deleteImagen);

export default router;