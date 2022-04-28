### Capa de seguridad para el servidor

##### Es un middleware practicamente lo que hace es permitir que solamente las peticiones que vengan de cierto dominio sean ingresadas a la API


[Cors doc](https://www.npmjs.com/package/cors)


1- Se importa y se agrega en el index.js como: 

`const cors = require('cors');`
`app.use(cors());`