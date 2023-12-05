import { ImagenModel } from "../models/ImgenModel.js"

export const getImagen = async (req, res) => {
    try {
        const respuesta = await ImagenModel.findAll();
        res.status(200).json(respuesta);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const createImagen = async (req, res) => {
    try {
        const { ID, imgPro, imgIns, imgProProduc, imgProIns,imgLogin} = req.body;
        //if (insumo) {
        //  return res.status(400).json({ message: "insumo ya existe" });
        //}
        const nuevoimagen = await ImagenModel.create({
            ID,
            imgPro,
            imgIns,
            imgProProduc,
            imgProIns,
            imgLogin,
        });
        res.status(201).json({
            message: "Imagen creado Correctamente",
            data: nuevoimagen,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getOneImagen = async (req, res) => {
    try {
        const { ID } = req.params;
        const imagen = await ImagenModel.findOne({ where: { ID } });
        if (!imagen)
            return res.status(404).json({ message: "imagen no encontrado" });
        res.status(200).json(imagen);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteImagen = async (req, res) => {
    try {
        const { ID } = req.params;
        const imagen = await ImagenModel.findOne({ where: { ID } });
        if (!imagen)
            return res.status(404).json({ message: "imagen no encontrado" });
        await ImagenModel.destroy({ where: { ID } });
        res.status(200).json({ message: "imagen eliminado Satisfactoriamente" });
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateImagen = async (req, res) => {
    try {
        const { ID } = req.params;
        const { imgPro, imgIns, imgProProduc, imgProIns,imgLogin } = req.body;
        const imagen = await ImagenModel.findOne({ where: { ID } });
        if (!imagen)
            return res.status(404).json({ message: "imagen no encontrado" });
        await ImagenModel.update({ imgPro, imgIns, imgProProduc, imgProIns,imgLogin }, { where: { ID } });
        res.status(200).json({ message: "imagen actualizado Correctamente" });
    } catch (error) {
        res.status(500).json(error);
    }
};