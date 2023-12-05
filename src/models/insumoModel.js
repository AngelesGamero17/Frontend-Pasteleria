import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const insumoModel = sequelize.define("insumoModel", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombreInsumo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cantidadInsumo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fecCompra: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      fecVen: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      tipoInsumo: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      precioInsumo: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },

      img:{
        type: DataTypes.STRING,
        allowNull: false
      },
    }
);


