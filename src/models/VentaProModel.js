import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const VentaProModel = sequelize.define("VentaProModel", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idCliente:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      idEmpleado:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      descripcion:{
        type: DataTypes.STRING,
        allowNull: false
      },
      precioTotal:{
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      fechaVenta: {
        type: DataTypes.DATEONLY,
        allowNull: false
      }, 
    }
);
