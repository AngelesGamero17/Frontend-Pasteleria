import { Router } from "express";
import {
  getProducto,
  createProducto,
  getOneProducto,
  updateProducto,
  deleteProducto,
} from "../controllers/productoController.js";
import { requireToken } from "../middlewares/requireToken.js";

/**
 * @swagger
 * components:
 *   schemas:
 *    producto:
 *      type: object
 *      properties: 
 *        nombre: 
 *          type: string
 *          description: the producto nombre
 *        cantidad:
 *          type: numeric
 *          description: the producto last cantidad
 *        precio:
 *          type: number
 *          format: double
 *          description: the producto precio
 *        fechaProduccion:
 *          type: string
 *          format: date
 *          description: the producto fechaProduccion
 *        img:
 *          type: string
 *          description: the img 
 *      required:
 *        - nombre
 *        - cantidad
 *        - precio
 *        - fechaProduccion
 *        - img
 *      example: 
 *        nombre: "Torta de Chocolate"
 *        cantidad: "20"
 *        precio: "30.00"
 *        fechaProduccion: "2023/08/007"
 *        img: "https://i.blogs.es/95d4c3/harina-trigo-tipos/1366_2000.jpg"
 */

const router = Router();

router.get("/", getProducto);

/**
 *  @swagger
 * /api/v1/Producto:
 *  get:
 *      summary: return all producto
 *      tags: [producto]
 *      responses:
 *        200:    
 *          description: all productos
 *          content: 
 *              application/json:
 *                  schema: 
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/producto'
 */

router.post("/", requireToken,createProducto);


/**
 *  @swagger
 * 
 * /api/v1/Producto:
 *  post:
 *      summary: crear un nuevo producto
 *      tags: [producto]
 *      security:
 *          - BearerAuth: []
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/producto'
 *      responses:
 *        200:    
 *          description: ¡nuevo producto creado!
 * 
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */


router.get("/:ID", getOneProducto);


/**
 *  @swagger
 * /api/v1/Producto/{id}:
 *  get:
 *      summary: return a producto
 *      tags: [producto]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the producto id
 *      responses:
 *        200:    
 *          description: all producto
 *          content: 
 *              application/json:
 *                  schema: 
 *                      type: object
 *                      $ref: '#/components/schemas/producto'
 *        404:
 *          description: producto not found
 */


router.put("/:ID",requireToken, updateProducto);


/**
 *  @swagger
 * /api/v1/Producto/{id}:
 *  put:
 *      summary: actualizar un producto
 *      tags: [producto]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: el ID del producto
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/producto'
 *      responses:
 *        200:    
 *          description: producto actualizado
 *        404:
 *          description: producto no encontrado
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

router.delete("/:ID",requireToken, deleteProducto);


/**
 *  @swagger
 * /api/v1/Producto/{id}:
 *  delete:
 *      summary: eliminar un producto
 *      tags: [producto]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: el ID del producto
 *      responses:
 *        200:    
 *          description: producto eliminado
 *        404:
 *          description: producto no encontrado
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