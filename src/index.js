// index.js

import app from "./app.js";
import { sequelize } from "./database/database.js"; // Importa la instancia de Sequelize desde el archivo adecuado
import "./models/index.js"; // Importa los modelos para que sean registrados en Sequelize

// Conecta a la base de datos y sincroniza los modelos
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");
    return sequelize.sync({ force: false }); // Sincroniza los modelos
  })
  .then(() => {
    console.log("Models synchronized");
    // Inicia el servidor en el puerto especificado en las variables de entorno
    app.listen(app.get("port"), () => {
      console.log(`Server running on http://${app.get("host")}:${app.get("port")}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to database or synchronizing models:", error);
    console.error(error);
  });



/* import app from "./app.js";
import { Sequelize } from "sequelize";
import "./models/index.js";
import { clienteModel } from "./models/clienteModel.js"; // Importa el modelo clienteModel

const sequelize = new Sequelize('dbpasteleria', 'pasteleria', 'pasteleria1.', {
  host: 'db',
  dialect: 'postgres',
});

// ...

app.listen(app.get("port"), async () => {
    try {
      await sequelize.authenticate(); // Verifica la conexión a la base de datos
      console.log("Database connected");
  
      await sequelize.sync({ force: false }); // Sincroniza los modelos
      console.log("Models synchronized");
  
      console.log("Running server on port", app.get("port"));
      console.log(`Connect to server on http://${app.get("host")}:${app.get("port")}`);
    } catch (error) {
      console.log("Error connecting to database or synchronizing models:", error);
      console.error(error);
    }
  });
    
   

 */
