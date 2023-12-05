import { clienteModel } from "./clienteModel.js";
import { insumoModel } from "./insumoModel.js";
import { productoModel } from "./productoModel.js";
import { tipoEmpleadoModel } from "./tipoEmpleadoModel.js";
import { tipoInsumoModel } from "./tipoInsumoModel.js";
import { tipoProductoModel } from "./tipoProductoModel.js";
import { empleadoModel } from "./empleadoModel.js";
import { VentaProModel } from "./VentaProModel.js";
import { VentaInsModel } from "./VentaInsModel.js";

// Relación de tipo de insumo a insumo
tipoInsumoModel.hasMany(insumoModel, { foreignKey: "tipoInsumo", sourceKey: "ID" });

// Relación de tipo de producto a producto
tipoProductoModel.hasMany(productoModel, { foreignKey: "tipoProducto", sourceKey: "ID" });

// Relación de tipo empleado a empleado
tipoEmpleadoModel.hasMany(empleadoModel, { foreignKey: "tipoEmpleado", sourceKey: "ID" });

// Relación de cliente y empleado a VentaInsModel
VentaInsModel.belongsTo(clienteModel, { foreignKey: "idCliente", targetKey: "ID" });
VentaInsModel.belongsTo(empleadoModel, { foreignKey: "idEmpleado", targetKey: "ID" });

// Relación de cliente y empleado a VentaProModel
VentaProModel.belongsTo(clienteModel, { foreignKey: "idCliente", targetKey: "ID" });
VentaProModel.belongsTo(empleadoModel, { foreignKey: "idEmpleado", targetKey: "ID" });
