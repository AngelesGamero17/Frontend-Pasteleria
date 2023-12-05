import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const clienteModel = sequelize.define("clienteModel", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nomCli: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 100] // Limits nomCli to be between 1 and 100 characters long
    }
  },
  direCli: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 200] // Limits direCli to be between 1 and 200 characters long
    }
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 15] // Limits telefono to be between 1 and 15 characters long
    }
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 10] // Limits dni to be between 1 and 10 characters long
    }
  }
});
