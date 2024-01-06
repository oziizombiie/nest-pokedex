<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo
1. Clonar el repositorio
2. Ejecutar
```
npm install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levanta Base de datos
```
docker-compose up -d
```
5. Clonar el archivo __.env_template__ y renombrar la copia a .env

6. Llenar las variables de entorno definidas en __.env__

7. Ejecutar la aplicación en dev:
```
npm run start:dev
```

8. Reconstruir la base de datos a default data
```
GET localhost:3000/api/v2/seed
```

## Stack usado
* MongoDB
* Nest