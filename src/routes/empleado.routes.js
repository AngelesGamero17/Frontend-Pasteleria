import { Router } from "express";
import {
  getEmpleado,
  createEmpleado,
  getOneEmpleado,
  updateEmpleado,
  deleteEmpleado
} from "../controllers/empleadoController.js";
import { requireToken } from "../middlewares/requireToken.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     empleado:
 *       type: object
 *       properties:
 *         nomEmp:
 *           type: string
 *           description: El nombre del empleado.
 *         apellEmp:
 *           type: string
 *           description: El apellido del empleado.
 *         email:
 *           type: string
 *           format: email
 *           description: Dirección de correo electrónico del empleado en formato válido.
 *         password:
 *           type: string
 *           description: Contraseña utilizada por el empleado.
 *         direccEmp:
 *           type: string
 *           description: La dirección del empleado.
 *         telefono:
 *           type: string
 *           description: El teléfono del empleado.
 *         tipoEmpleado:
 *           type: string
 *           description: El tipo de empleado.
 *       required:
 *         - nomEmp
 *         - apellEmp
 *         - email
 *         - password
 *         - direccEmp
 *         - telefono
 *         - tipoEmpleado
 *       example:
 *         nomEmp: "Angeles"
 *         apellEmp: "Gamero"
 *         email: "angelesgamero17@gmail.com"
 *         password: "angeles"
 *         direccEmp: "Cooperativa Jron.Hidra Mza.V Lote.21"
 *         telefono: "987654321"
 *         tipoEmpleado: "1"
 */

const router = Router();
router.get("/", getEmpleado);
/**
 *  @swagger
 * /api/v1/Empleado:
 *  get:
 *      summary: return all empleado
 *      tags: [empleado]
 *      responses:
 *        200:    
 *          description: all empleado
 *          content: 
 *              application/json:
 *                  schema: 
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/empleado'
 */
router.post("/",createEmpleado);

/**
 *  @swagger
 * 
 * /api/v1/Empleado:
 *  post:
 *      summary: crear un nuevo empleado
 *      tags: [empleado]
 *      security:
 *          - BearerAuth: []
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/empleado'
 *      responses:
 *        200:    
 *          description: ¡nuevo empleado creado!
 * 
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

router.get("/:ID", getOneEmpleado);


/**
 *  @swagger
 * /api/v1/Empleado/{id}:
 *  get:
 *      summary: return a empleado
 *      tags: [empleado]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the empleado id
 *      responses:
 *        200:    
 *          description: all empleado
 *          content: 
 *              application/json:
 *                  schema: 
 *                      type: object
 *                      $ref: '#/components/schemas/empleado'
 *        404:
 *          description: empleado not found
 */

router.put("/:ID",requireToken, updateEmpleado);


/**
 *  @swagger
 * /api/v1/Empleado/{id}:
 *  put:
 *      summary: actualizar un empleado
 *      tags: [empleado]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: el ID del empleado
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/empleado'
 *      responses:
 *        200:    
 *          description: empleado actualizado
 *        404:
 *          description: empleado no encontrado
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


router.delete("/:ID",requireToken, deleteEmpleado);

/**
 *  @swagger
 * /api/v1/Empleado/{id}:
 *  delete:
 *      summary: eliminar un empleado
 *      tags: [empleado]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: el ID del empleado
 *      responses:
 *        200:    
 *          description: empleado eliminado
 *        404:
 *          description: empleado no encontrado
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
