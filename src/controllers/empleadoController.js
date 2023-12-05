import { empleadoModel } from "../models/empleadoModel.js";
import { encriptarContrasena } from "../libs/encryptPassword.js";
import config from "../config.js";
import { generateToken, generateRefreshToken } from "../utils/tokenManager.js";
import  jwt  from "jsonwebtoken";

export const getEmpleado = async (req, res) => {
  try {
    const respuesta = await empleadoModel.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createEmpleado = async (req, res) => {
  try {
    let { ID, nomEmp, apellEmp, email, password, direccEmp, telefono, tipoEmpleado } = req.body;
    //if (empleado) {
    //  return res.status(400).json({ message: "Empleado ya existe" });
    //}
    password = await encriptarContrasena(password)

    const nuevoempleado = await empleadoModel.create({
      ID,
      nomEmp,
      apellEmp,
      email,
      password,
      direccEmp,
      telefono,
      tipoEmpleado
    });
    
    const token = jwt.sign({ID: nuevoempleado.ID}, config.JWT_SECRET,{
      expiresIn: "24h"
    }) 
    res.json({
      message:'autoentificacion exitosa',
      token: token
    }) // aquí se envía la respuesta al cliente con el token
  } catch (error) {
    res.status(500).json({ message: "Error al generar el token" });
  }
};

export const getOneEmpleado = async (req, res) => {
  try {
    const { ID } = req.params;
    const empleado = await empleadoModel.findOne({ where: { ID } });
    if (!empleado)
      return res.status(404).json({ message: "empleado no encontrado" });
    res.status(200).json(empleado);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteEmpleado = async (req, res) => {
  try {
    const { ID } = req.params;
    const empleado = await empleadoModel.findOne({ where: { ID } });
    if (!empleado)
      return res.status(404).json({ message: "empleado no encontrado" });
    await empleadoModel.destroy({ where: { ID } });
    res.status(200).json({ message: "empleado eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateEmpleado = async (req, res) => {
  try {
    const { ID } = req.params;
    let { nomEmp, apellEmp, email, password, direccEmp, telefono,tipoEmpleado } = req.body;
    const empleado = await empleadoModel.findOne({ where: { ID } });
    if (!empleado) {
      return res.status(404).json({ message: "empleado no encontrado" });
    }
    //encriptacion de contraseña
    //password = await encriptarContrasena(password)
    //console.log(password)
    await empleadoModel.update({ nomEmp, apellEmp, email, password, direccEmp, telefono,tipoEmpleado }, { where: { ID } });
    res.status(200).json({ message: "Empleado actualizado Correctamente" });
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
};

