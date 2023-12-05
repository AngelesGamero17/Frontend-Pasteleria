import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const ImagenModel = sequelize.define("ImagenModel", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  imgPro: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imgIns: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imgProProduc: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imgProIns: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imgLogin: {
    type: DataTypes.STRING,
    allowNull: false
  },
});
