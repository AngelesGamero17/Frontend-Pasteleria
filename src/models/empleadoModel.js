import { DataTypes, DATE, NOW } from "sequelize";
import { sequelize } from "../database/database.js";

export const empleadoModel = sequelize.define("empledoModel", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nomEmp: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellEmp: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    index: { unique: true } 
  },
  password: {
    type: DataTypes.STRING,
    required: true,
  },
  direccEmp: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  tipoEmpleado: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}
);