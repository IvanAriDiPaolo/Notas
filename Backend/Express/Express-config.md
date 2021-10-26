Primero que nada te ayuda con la creacion del bakcend server.

### Se empieza con:
`npm i express`

##### Se hace la config basica de express en el index.js:

`const express = require('express')` <Manera de importarlo
Recordar que tambien se hacen los siguientes imports en el index.js:
`require('dotenv').config();` Import para usar las variables de entornos en el .env del root

##### Despues crear el servidor de express en el mismo index.js:

`const app = express()`

##### Creamos el acceso al directorio publico con el middleware app.use:
`app.use(app.use(express.static('public')))` < De esta manera le vamos a estar devolviendo el index.html de la carpeta public
Aca va a estar toda la app final de react

##### Creamos la lectura y parseo del body antes de las rutas
`app.use(express.json())` < Hace que las peticiones que vengan en json se pasen a texto

##### Creamos las rutas/endpoints:
`app.get('/', (req, res) => { ` <Metodo get, al link '/' con un callback que recibe req y res>
`console.log('se require el /')`
`})`

#### Esto de las rutas se hace mas resumido de la siguiente manera:
1- Cremos el directiorio routes en la raiz del proyecto, y dentro de el archivos relacionados a cada parte de nuestro proyecto que querramos incorporar distintos endpoints, como por ejemplo: auth.js
2- En el index.js vamos a poner de la siguiente manera las rutas:

`app.use('/api/auth', require('./routes/auth'))` Osea que todo lo que ./routes/auth exporte lo va a habilitar en la ruta /api/auth < Esta ruta va a estar seguida de la ruta que le especificamos antes, osea la de '/'... en conclusion seria:
localhost:4000/api/auth

3- En routes/auth.js hacemos un require de express
`const express = require('express')`
y configuramos un router:
`const router = express.Router`
o directamente: 
`const {Roter} = require('express')`
y despues:
`const router = Router()`

4- Ese router lo vamos a usar en el lugar del app
y va a quedar:
`router.get bla bla bla`
en el routes/auth.js
Todas las rutas que yo incluya en el archivo por ejemplo:
`routes.post('/new', (req....))` el path completo seria localhost:4000/api/auth/new

[Explicacion](../Routes-Controllers/controllers.md)

5- En esa route vamos a hacer el export de la siguiente manera:
`module.exports = router;`

##### Por ultimo ponemos al servidor a escuchar peticiones:

`app.listen(4000, () => {`
`    console.log('Server running on port 4000)`
`}) `
<Con un callback que se va a ejecutar cuando el servidor de express este arriba