1- npm init -y

2- Install de express y config de express en index.js

[Express](./Express/Express-config.md)

3- Creacion de carpeta public con index.html y styles.css
<<<<<<< HEAD

4- Testear el directorio publico en index.js con app.use() < Middleware

5- Creamos variables de entorno, .env en la carpeta del proyecto, creamos la variable PORT
Para llamar esta variable de entorno necesitamos el paquete dotenv, hacemos el require de dicho paquete en el index.js
require('dotenv').config();

6- Se crea el directorio de routes para definir cada tipo de ruta que tenemos ya sea de auth, como de eventos, etc

=======
4- Testear el directorio publico en index.js con app.use() < Middleware
5- Creamos variables de entorno, .env en la carpeta del proyecto, creamos la variable PORT
Para llamar esta variable de entorno necesitamos el paquete dotenv, hacemos el require de dicho paquete en el index.js
require('dotenv').config();
6- Se crea el directorio de routes para definir cada tipo de ruta que tenemos ya sea de auth, como de eventos, etc
>>>>>>> 24eef37be04c113da347f41d1cd9c2697b0991ee
7- Creamos el directorio de controllers para manejar cada una de esas rutas que hicimos en routes, son para las funciones que yo tengo definidas para cada:

[a link](./Routes-Controllers/controllers.md)

8- Para estos controllers necesitamos validaciones acerca de lo que la gente envia de informacion,
esos controles se hacen a traves de middlewares en nuestro routes/auth.js entre el path y la funcion del controlador:
`routes.post('/new', [], crearUsuario`
[a link](./Express/express-validator.md) para más info

<<<<<<< HEAD
9-
=======
9-
>>>>>>> 24eef37be04c113da347f41d1cd9c2697b0991ee
