paso 1
iniciar proyecto con npm ini -y

paso 2 
Instalar dependencias  con npm i express sequelize pg pg-hstore cors dotenv

paso 3 
instalar las dependencias de desarrollo con npm i nodemon morgan -D

paso 4
estructura de carpetas
  /src
  --/services
  --/model
  /controllers
  /routes
  --/middlewaresd
  --/seeders
  --/test
  --/utils
  --/templates
    app.js
    server.js

paso 5 crear los scripts en package.json con
  "start": "node ./src/server.js",
  "dev": "nodemon ./src/server.js",

paso 6 
crear un server vacio

paso 7
configurar la conexion a base de datos

paso 8
autenticar la base de datos en app.js

paso 9 crear un modelo generico de usuarios

paso 10
crear el init models

paso 11
sincronizar la base de datos

paso 12
registrar usuarios --> creacion de usuarios
bcrypt 

paso 13
autenticacion con el login
