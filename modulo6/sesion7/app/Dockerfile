FROM node:16
#aquí se crea la carpeta para el proyecto dentro del contenedor.
WORKDIR /app
#se copian todos los archivos package*.json dentro del contenedor para instalarlos.
COPY package*.json ./
#se instalan los paquetes que vienen en package.json
RUN npm install
#copia todos los archivos del proyecto
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]