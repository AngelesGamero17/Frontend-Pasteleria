import { tipoProductoModel } from "../models/tipoProductoModel.js";

export const getTipoProducto = async (req, res) => {
  try {
    const respuesta = await tipoProductoModel.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createTipoProducto = async (req, res) => {
  try {
    const { ID,descripProducto} = req.body;
    //if (tipoInsumo) {
    //  return res.status(400).json({ message: "tipoProducto ya existe" });
    //}
    const nuevotipoProducto = await tipoProductoModel.create({
      ID,
      descripProducto
    });
    res.status(201).json({
      message: "tipoProducto creado Correctamente",
      data: nuevotipoProducto,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneTipoProducto = async (req, res) => {
  try {
    const { ID } = req.params;
    const tipoProducto = await tipoProductoModel.findOne({ where: { ID } });
    if (!tipoProducto)
      return res.status(404).json({ message: "tipoProducto no encontrado" });
    res.status(200).json(tipoProducto);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteTipoProducto = async (req, res) => {
  try {
    const { ID } = req.params;
    const tipoProducto = await tipoProductoModel.findOne({ where: { ID } });
    if (!tipoProducto)
      return res.status(404).json({ message: "tipoProducto no encontrado" });
    await tipoProductoModel.destroy({ where: { ID } });
    res.status(200).json({ message: "tipoProducto eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTipoProducto = async (req, res) => {
  try {
    const { ID } = req.params;
    const { descripProducto} = req.body;
    const tipoProducto = await tipoProductoModel.findOne({ where: { ID } });
    if (!tipoProducto)
      return res.status(404).json({ message: "tipoProducto no encontrado" });
    await tipoProductoModel.update({ descripProducto }, { where: { ID } });
    res.status(200).json({ message: "tipoProducto actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

