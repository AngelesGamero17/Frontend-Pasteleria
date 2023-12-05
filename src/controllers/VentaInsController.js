import {VentaInsModel} from "../models/VentaInsModel.js";

export const getVentaInsumo = async (req, res) => {
  try {
    const respuesta = await VentaInsModel.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createVentaInsumo = async (req, res) => {
  try {
    const { ID,idCliente,idEmpleado,descripcion,precioTotal,fechaVenta} = req.body;
    //if (detalleComprobante) {
    //  return res.status(400).json({ message: "detalleComprobante ya existe" });
    //}
    const nuevoVentaIns = await VentaInsModel.create({
      ID,
      idCliente,
      idEmpleado,
      descripcion,
      precioTotal,
      fechaVenta
    });
    res.status(201).json({
      message: "SE ha creado Correctamente la Nueva Venta de Insumo",
      data: nuevoVentaIns,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneVentaInsumo = async (req, res) => {
  try {
    const { ID } = req.params;
    const VentaInsumo = await VentaInsModel.findOne({ where: { ID } });
    if (!VentaInsumo)
      return res.status(404).json({ message: "Venta de Insumo no encontrado" });
    res.status(200).json(VentaInsumo);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteVentaInsumo = async (req, res) => {
  try {
    const { ID } = req.params;
    const VentaInsumo = await VentaInsModel.findOne({ where: { ID } });
    if (!VentaInsumo)
      return res.status(404).json({ message: "Venta de Insumo no encontrado" });
    await VentaInsModel.destroy({ where: { ID } });
    res.status(200).json({ message: "Venta de Insumo a sido eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateVentaInsumo = async (req, res) => {
  try {
    const { ID } = req.params;
    const { idCliente,idEmpleado,descripcion,precioTotal,fechaVenta } = req.body;
    const VentaInsumo = await VentaInsModel.findOne({ where: { ID } });
    if (!VentaInsumo)
      return res.status(404).json({ message: "detalleComprobante no encontrado" });
    await VentaInsModel.update({idCliente,idEmpleado,descripcion,precioTotal,fechaVenta}, { where: { ID } });
    res.status(200).json({ message: "Venta de Insumo actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

