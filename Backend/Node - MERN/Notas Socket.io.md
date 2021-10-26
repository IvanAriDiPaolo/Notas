npm i socket.io

1- Creamos la carpeta en nuestra public de "js" y dentro el archivo "socket-client.js"

2- Creamos el servidor this.server = require('http').createServer() si estamos trabajando con express

y hacemos this.io = require('socket.io;)(server); <<< Se requiere el paquete de socket io y se le manda la configuracion del servidor.

3- Se puede hacer una conexion con express que esta en la pag de socket.io npm

TODO ESTO SE HACE EN EL MODELO DEL SERVIDOR en el Constructor:

this.server = require('http').createServer(this.app);

this.io = require('socket.io')(server);

En el metodo listen de nuestro servidor cambiamos this.app por this.server para empezar a usar el server linkeado a los sockets

creamos el metodo

sockets(){

this.io.on('connection', socketController);

}

y lo linkeamos al archvio controller.js en nuestra carpeta socket creada en el root.

NO OLVIDARSE DE LLAMAR EL METODO COMO THIS.SOCKETS() EN EL CONSTRUCTOR

en caso que al controlador haya que pasarle el io hacemos:

this.io.on('connection', (socket) => socketController(socket, this.io));

y en el controlador pasamos como segundo parametro de la funcion de flecha el io

4- En el html que usemos sockets hay que agregar el script:

<script src="./socket.io/socket.io.js"></script>

5- En el modelo del servidor vamos a crear un nuevo path para manejo de eventos

por sockets

this.sockets(); en constructor

7- En socket-client.js creamos los sockets de los clientes

const socket = io();
