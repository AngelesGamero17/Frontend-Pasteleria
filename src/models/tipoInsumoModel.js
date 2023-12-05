import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const tipoInsumoModel = sequelize.define("tipoInsumoModelo", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      descripInsumo: {
        type: DataTypes.STRING,
        allowNull: false
      },

    }
);


