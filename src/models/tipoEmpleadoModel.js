import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const tipoEmpleadoModel = sequelize.define("tipoEmpleadoModel", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rol: {
    type: DataTypes.STRING,
    allowNull: false
  },

}
);


