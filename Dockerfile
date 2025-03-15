# Imagen base con Node.js y npm preinstalados
FROM node:12.18.3-alpine

# Establecemos el directorio de trabajo
WORKDIR /app

# Exponemos el puerto 4200 (el puerto predeterminado de Angular)
EXPOSE 4200


# OPCION 1: CON DOCKER COMPOSE
# docker-compose up --build

# OPCION 2: A MANOPLA
# docker build -t web-fundamendez .
# docker run -v $(pwd):/app -p 4200:4200 -it --rm --entrypoint sh --name web-fundamendez --rm web-fundamendez
# RUN npm install --force
# RUN npm run build
# npm run start -- --host 0.0.0.0
