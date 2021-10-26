#### Los modelos son las representaciones visuales dentro de la base de datos
##### Despues de esto se crean instancias de los modelos y se guardan en la base de datos

1- Se crea el directorio 'models' en el root y dentro el archivo del modelo que querramos hacer, con la primer letra mayus
2- Dentro del archivo del modelo que creemos desestructuramos Schema y modelo de mongoose:

` const {Schema, model} = require('mongoose');`

3- Se crea el modelo con la configuracion que necesito como objeto:

```
const UserSchema = Schema ({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})
```

4- Exportamos el Modelo:

`module.exports = model('User', UserSchema);`


5- Donde necesitemos trabajar con nuestro modelo, lo importamos en mayuscula, casi siempre en controladores:

`const User = require('../models/User');`

Y creamos la instancia en minuscula:

`const user = new User();`

se le suele enviar entre los () del User el req.body

moongose va a tomar lo que nosotros le hayamos puesto en el Schema como nombre, password, email, y va a tomer eso, el resto lo ignora

`user.save()` para que se guarde en la base de datos.

6- Hacer testeo en postman y verificar en MongoCompass con ctrl+R que se haya creado la coleccion que dijimos en la variable de entorno.

7- Hacer un try Catch cuando trabajemos en base de datos, por ejemplo en este caso:

```
const { response } = require('express');
const { validationResult } = require('express-validator')
const Usuario = require('../models/Usuario');


const createUser = async(req, res = response) => {

    // const { name, email, password } = req.body;

    try {

        const usuario = new Usuario(req.body);
    
        await usuario.save()
    
        res.json({
            ok: 'true',
            msg: 'post new'
        }, 201)
        
    } catch (error) {
        
        console.log(error)

        res.json({
            ok: false,
            msg: 'Database Error, talk with and admin'
        }, 500)
        
    }
}
```


### Importante: Vos cuando usas por ejemplo usando lo de arriba el modelo de Usuario, mongoose primero crea una coleccion en la base de datos que le pone una s: Usuarios, y despues si haces un Usuario.findOne te lo busca en esa base de datos.

8- Validar/Encriptar datos ingresados

[Validar Email](../Validaciones-Encriptaciones/Validar-Email-Ejemplo.md)

[Encriptar Contraseña](../Validaciones-Encriptaciones/Encriptar-Contrasenia.md)

9- Para poner una propiedad de un modelo que sea referenciada a otro modelo se usa:

```
user: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario'
}
```

10- Para serializar info o modificarla, al final del modelo, arriba del export hacemos:

```
Event
```