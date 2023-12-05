import { clienteModel } from "../models/clienteModel.js";

export const getCliente = async (req, res) => {
  try {
    const respuesta = await clienteModel.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createCliente = async (req, res) => {
  try {
    const { ID,nomCli,direCli,telefono,dni } = req.body;
    //if (cliente) {
    //  return res.status(400).json({ message: "Cliente ya existe" });
   // }
    const nuevoCliente = await clienteModel.create({
      ID,
      nomCli,
      direCli,
      telefono,
      dni
    });
    res.status(201).json({
      message: "Cliente creado Correctamente",
      data: nuevoCliente,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneCliente = async (req, res) => {
  try {
    const { ID } = req.params;
    const cliente = await clienteModel.findOne({ where: { ID } });
    if (!cliente)
      return res.status(404).json({ message: "Cliente no encontrado" });
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const { ID } = req.params;
    const cliente = await clienteModel.findOne({ where: { ID } });
    if (!cliente)
      return res.status(404).json({ message: "Cliente no encontrado" });
    await clienteModel.destroy({ where: { ID } });
    res.status(200).json({ message: "Cliente eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateCliente = async (req, res) => {
  try {
    const { ID } = req.params;
    const { nomCli,direCli,telefono,dni } = req.body;
    const cliente = await clienteModel.findOne({ where: { ID } });
    if (!cliente)
      return res.status(404).json({ message: "Cliente no encontrado" });
    await clienteModel.update({ nomCli,direCli,telefono,dni }, { where: { ID } });
    res.status(200).json({ message: "Cliente actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

