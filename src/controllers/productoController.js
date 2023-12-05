import { productoModel } from "../models/productoModel.js";

export const getProducto = async (req, res) => {
  try {
    const respuesta = await productoModel.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createProducto = async (req, res) => {
  try {
    const { ID,nombre,cantidad,precio,fechaProduccion,fechaVencimiento,tipoProducto,img } = req.body;
    //if (producto) {
    //  return res.status(400).json({ message: "producto ya existe" });
    //}
    const nuevoproducto = await productoModel.create({
      ID,
      nombre,
      cantidad,
      precio,
      fechaProduccion,
      fechaVencimiento,
      tipoProducto,
      img
    });
    res.status(201).json({
      message: "producto creado Correctamente",
      data: nuevoproducto,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneProducto = async (req, res) => {
  try {
    const { ID } = req.params;
    const producto = await productoModel.findOne({ where: { ID } });
    if (!producto)
      return res.status(404).json({ message: "producto no encontrado" });
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const { ID } = req.params;
    const producto = await productoModel.findOne({ where: { ID } });
    if (!producto)
      return res.status(404).json({ message: "producto no encontrado" });
    await productoModel.destroy({ where: { ID } });
    res.status(200).json({ message: "producto eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateProducto = async (req, res) => {
  try {
    const { ID } = req.params;
    const {nombre,cantidad,precio,fechaProduccion,fechaVencimiento,tipoProducto,img} = req.body;
    const producto = await productoModel.findOne({ where: { ID } });
    if (!producto)
      return res.status(404).json({ message: "producto no encontrado" });
    await productoModel.update({nombre,cantidad,precio,fechaProduccion,fechaVencimiento,tipoProducto,img}, { where: { ID } });
    res.status(200).json({ message: "producto actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};
