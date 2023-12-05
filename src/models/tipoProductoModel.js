import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const tipoProductoModel = sequelize.define("tipoProductoModelo", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      descripProducto: {
        type: DataTypes.STRING,
        allowNull: false
      },

    }
);


