import { Router } from "express";
import {
  getInsumo,
  createInsumo,
  getOneInsumo,
  updateInsumo,
  deleteInsumo,
} from "../controllers/insumoController.js";
import { requireToken } from "../middlewares/requireToken.js";

/**
 * @swagger
 * components:
 *   schemas:
 *    insumo:
 *      type: object
 *      properties: 
 *        nombreInsumo: 
 *          type: string
 *          description: the insumo nombreInsumo
 *        cantidadInsumo:
 *          type: numeric
 *          description: the insumo last cantidadInsumo 
 *        fecCompra:
 *          type: string
 *          format: date
 *          description: the insumo fecCompra
 *        tipoInsumo:
 *          type: string
 *          description: the insumo tipo insumo
 *        precioInsumo: 
 *          type: number
 *          format: double
 *          description: the insumo precio Insumo
 *        img:
 *          type: string
 *          description: the img 
 *      required:
 *        - nombreInsumo
 *        - cantidadInsumo
 *        - fecCompra
 *        - tipoInsumo
 *        - precioInsumo
 *        - img
 *      example: 
 *        nombreInsumo: "Harina"
 *        cantidadInsumo: "2 saco"
 *        fecCompra: "2023-04-04"
 *        tipoInsumo: "1"
 *        precioInsumo: "60.00"
 *        img: "https://i.blogs.es/95d4c3/harina-trigo-tipos/1366_2000.jpg"
 */

const router = Router();
router.get("/", getInsumo);
/**
 *  @swagger
 * /api/v1/Insumo:
 *  get:
 *      summary: return all insumo
 *      tags: [insumo]
 *      responses:
 *        200:    
 *          description: all insumos
 *          content: 
 *              application/json:
 *                  schema: 
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/insumo'
 */
router.post("/",requireToken, createInsumo);

/**
 *  @swagger
 * 
 * /api/v1/Insumo:
 *  post:
 *      summary: crear un nuevo insumo
 *      tags: [insumo]
 *      security:
 *          - BearerAuth: []
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/insumo'
 *      responses:
 *        200:    
 *          description: ¡nuevo insumo creado!
 * 
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

router.get("/:ID",getOneInsumo);

/**
 *  @swagger
 * /api/v1/Insumo/{id}:
 *  get:
 *      summary: return a insumo
 *      tags: [insumo]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the insumo id
 *      responses:
 *        200:    
 *          description: all insumo
 *          content: 
 *              application/json:
 *                  schema: 
 *                      type: object
 *                      $ref: '#/components/schemas/insumo'
 *        404:
 *          description: insumo not found
 */

router.put("/:ID",requireToken ,updateInsumo);

/**
 *  @swagger
 * /api/v1/Insumo/{id}:
 *  put:
 *      summary: actualizar un insumo
 *      tags: [insumo]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: el ID del insumo
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/insumo'
 *      responses:
 *        200:    
 *          description: insumo actualizado
 *        404:
 *          description: insumo no encontrado
 *      security:
 *          - BearerAuth: []
 * 
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

router.delete("/:ID",requireToken, deleteInsumo);

/**
 *  @swagger
 * /api/v1/Insumo/{id}:
 *  delete:
 *      summary: eliminar un insumo
 *      tags: [insumo]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: el ID del insumo
 *      responses:
 *        200:    
 *          description: insumo eliminado
 *        404:
 *          description: insumo no encontrado
 *      security:
 *          - BearerAuth: []
 * 
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

export default router;