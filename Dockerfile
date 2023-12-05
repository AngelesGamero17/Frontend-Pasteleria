
# Establecer la imagen base (Node.js)
FROM node:19

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos del proyecto al directorio de trabajo del contenedor
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto al directorio de trabajo del contenedor
COPY . .

# Exponer el puerto en el que la API escuchará (debe coincidir con el puerto de la API en el código)
EXPOSE 4000

# Comando para iniciar la aplicación (debe coincidir con el comando en tu package.json)
CMD ["npm","run", "dev"]
