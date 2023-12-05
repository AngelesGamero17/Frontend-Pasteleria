import { tipoInsumoModel } from "../models/tipoInsumoModel.js";

export const getTipoInsumo = async (req, res) => {
  try {
    const respuesta = await tipoInsumoModel.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createTipoInsumo = async (req, res) => {
  try {
    const { ID,descripInsumo} = req.body;
    //if (tipoInsumo) {
    //  return res.status(400).json({ message: "tipoInsumo ya existe" });
    //}
    const nuevotipoInsumo = await tipoInsumoModel.create({
      ID,
      descripInsumo
    });
    res.status(201).json({
      message: "tipoInsumo creado Correctamente",
      data: nuevotipoInsumo,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneTipoInsumo = async (req, res) => {
  try {
    const { ID } = req.params;
    const tipoInsumo = await tipoInsumoModel.findOne({ where: { ID } });
    if (!tipoInsumo)
      return res.status(404).json({ message: "tipoInsumo no encontrado" });
    res.status(200).json(tipoInsumo);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteTipoInsumo = async (req, res) => {
  try {
    const { ID } = req.params;
    const tipoInsumo = await tipoInsumoModel.findOne({ where: { ID } });
    if (!tipoInsumo)
      return res.status(404).json({ message: "tipoInsumo no encontrado" });
    await tipoInsumoModel.destroy({ where: { ID } });
    res.status(200).json({ message: "tipoInsumo eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTipoInsumo = async (req, res) => {
  try {
    const { ID } = req.params;
    const { descripInsumo} = req.body;
    const tipoInsumo = await tipoInsumoModel.findOne({ where: { ID } });
    if (!tipoInsumo)
      return res.status(404).json({ message: "tipoInsumo no encontrado" });
    await tipoInsumoModel.update({ descripInsumo }, { where: { ID } });
    res.status(200).json({ message: "tipoInsumo actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

