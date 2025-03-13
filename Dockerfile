# Imagen base con Node.js y npm preinstalados
FROM node:12.18.3-alpine

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos el package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalamos las dependencias de npm
RUN npm install

# Copiamos el resto de los archivos del proyecto al contenedor
COPY . .

# Construimos el proyecto
RUN npm run build

# Exponemos el puerto 4200 (el puerto predeterminado de Angular)
EXPOSE 4200

# Comando para iniciar el servidor de desarrollo de Angular
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]


# docker build -t angular-app .
# docker run -p 4200:4200 angular-app
