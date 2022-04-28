##### Instalar e importar Mongoose

[Doc Mongoose](https://mongoosejs.com/)

1- Crear carpeta en root que se llame database y archivo config.js

2- importamos mongoose
`const mongoose = require('mongoose')`

3- Creamos el DBConecction y lo exportamos:

```
const mongoose = require('mongoose');

const dbConnection = async () => {

    try {

        await mongoose.connect(process.env.DB_CNN);

        console.log('DB Online')

    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de inicializar BD')

    }

}

module.exports = {
    dbConnection
}
```

4- Creamos la variable de entorno en .env de DB_CNN= url que encontremos en la pantalla principal de mongoCompass cuando clickeamos en nuestra base de datos a usar
ej: mongodb+srv://IvanDP:*****@cluster0.uf80g.mongodb.net/test?authSource=admin&replicaSet=atlas-kpb8s2-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true

###### Ponemos la contraseña que corresponde y despues del .net/ se borra todo y se especifica la base de datos que queremos que se guarde todo, un nombre creado por nosotros:

mongodb+srv://IvanDP:jugorico12@cluster0.uf80g.mongodb.net/cafecitoDB

5- Importamos esta config en nuestro index.js:
```
require {dbConnection} = require('./database/config');
```
y llamamos la funcion abajo:
`dbConnection();`

6- Ahora se pasa a la parte de la creacion de modelos

[Crear Modelos](./Creacion-de-registros-Modelos/Creacion-De-Modelos.md)