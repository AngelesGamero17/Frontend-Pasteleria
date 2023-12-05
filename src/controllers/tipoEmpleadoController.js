import { tipoEmpleadoModel } from "../models/tipoEmpleadoModel.js";

export const getTipoEmpleado = async (req, res) => {
  try {
    const respuesta = await tipoEmpleadoModel.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createTipoEmpleado = async (req, res) => {
  try {
    const { ID,rol} = req.body;
    //if (tipoEmpleado) {
    //  return res.status(400).json({ message: "tipoEmpleado ya existe" });
    //}
    const nuevotipoEmpleado = await tipoEmpleadoModel.create({
      ID,
      rol
    });
    res.status(201).json({
      message: "tipoEmpleado creado Correctamente",
      data: nuevotipoEmpleado,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneTipoEmpleado = async (req, res) => {
  try {
    const { ID } = req.params;
    const tipoEmpleado = await tipoEmpleadoModel.findOne({ where: { ID } });
    if (!tipoEmpleado)
      return res.status(404).json({ message: "tipoEmpleado no encontrado" });
    res.status(200).json(tipoEmpleado);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteTipoEmpleado = async (req, res) => {
  try {
    const { ID } = req.params;
    const tipoEmpleado = await tipoEmpleadoModel.findOne({ where: { ID } });
    if (!tipoEmpleado)
      return res.status(404).json({ message: "tipoEmpleado no encontrado" });
    await tipoEmpleadoModel.destroy({ where: { ID } });
    res.status(200).json({ message: "tipoEmpleado eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTipoEmpleado = async (req, res) => {
  try {
    const { ID } = req.params;
    const { rol } = req.body;
    const tipoEmpleado = await tipoEmpleadoModel.findOne({ where: { ID } });
    if (!tipoEmpleado)
      return res.status(404).json({ message: "tipoEmpleado no encontrado" });
    await tipoEmpleadoModel.update({ rol }, { where: { ID } });
    res.status(200).json({ message: "tipoEmpleado actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};


