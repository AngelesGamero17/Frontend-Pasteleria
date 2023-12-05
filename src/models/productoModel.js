import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const productoModel = sequelize.define("productoModel", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cantidad: {
        type: DataTypes.STRING,
        allowNull: false
      },
      precio: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      fechaProduccion: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      fechaVencimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      tipoProducto: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      img:{
        type: DataTypes.STRING,
        allowNull: false
      },
      
    }
);


