import { compararPassword } from "../middlewares/compararPassword.js";
import { empleadoModel } from "../models/empleadoModel.js";
import jwt from 'jsonwebtoken';

export const authController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(404).json({ message: "All fields are required" });
        const emailExist = await empleadoModel.findOne({
            where: {
                email: email
            }
        })

        if (emailExist) {
            let passwordIsCorrect = compararPassword(password, emailExist.password)
            if (passwordIsCorrect) {
                const token = jwt.sign({ emailExist }, process.env.JWT_SECRET, {
                    expiresIn: "24h"
                });
                return res.status(200).json({
                    message: "Logueado correctamente",
                    token: token,
                    data: {
                        id: emailExist.ID,
                        tipoEmpleado: emailExist.tipoEmpleado
                    }
                })
            } else {
                return res.status(400).json({
                    message: "Contraseña incorrecta"
                })
            }
        } else {
            return res.status(200).json({ message: "Los Credenciales son Incorrectos" })
        }

        res.status(201).json({ message: "Login Correcto", data: emailExist });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

};
