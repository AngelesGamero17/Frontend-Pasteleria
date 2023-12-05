import {VentaProModel} from "../models/VentaProModel.js";

export const getVentaProducto = async (req, res) => {
  try {
    const respuesta = await VentaProModel.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createVentaProducto = async (req, res) => {
  try {
    const { ID,idCliente,idEmpleado,descripcion,precioTotal,fechaVenta} = req.body;
    //if (detalleComprobante) {
    //  return res.status(400).json({ message: "detalleComprobante ya existe" });
    //}
    const nuevoVentaPro = await VentaProModel.create({
      ID,
      idCliente,
      idEmpleado,
      descripcion,
      precioTotal,
      fechaVenta
    });
    res.status(201).json({
      message: "SE ha creado Correctamente la Nueva Venta de Producto",
      data: nuevoVentaPro,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneVentaProducto = async (req, res) => {
  try {
    const { ID } = req.params;
    const VentaProducto = await VentaProModel.findOne({ where: { ID } });
    if (!VentaProducto)
      return res.status(404).json({ message: "Venta de Producto no encontrado" });
    res.status(200).json(VentaProducto);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteVentaProducto = async (req, res) => {
  try {
    const { ID } = req.params;
    const VentaProducto = await VentaProModel.findOne({ where: { ID } });
    if (!VentaProducto)
      return res.status(404).json({ message: "Venta de Producto no encontrado" });
    await VentaProModel.destroy({ where: { ID } });
    res.status(200).json({ message: "Venta de Producto a sido eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateVentaProducto = async (req, res) => {
  try {
    const { ID } = req.params;
    const { idCliente,idEmpleado,descripcion,precioTotal,fechaVenta } = req.body;
    const VentaProducto = await VentaProModel.findOne({ where: { ID } });
    if (!VentaProducto)
      return res.status(404).json({ message: "Venta Producto no encontrado" });
    await VentaProModel.update({idCliente,idEmpleado,descripcion,precioTotal,fechaVenta}, { where: { ID } });
    res.status(200).json({ message: "Venta de Producto actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

