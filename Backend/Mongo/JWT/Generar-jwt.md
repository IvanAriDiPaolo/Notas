##### Sirve para ponerle un cierto limite de uso al usuario

[docs](https://jwt.io/)

Instalar: `npm i jsonwebtoken` en el proyecto

Se maneja con payload, no se pone informacion sensible ni importante

1- Vamos a crear nuestra funcion encargadad de generar nuestros json web tokens en el directorio helpers en el root

2- Crear la variable de entorno de la seed del jwt en el .env que los que tengan acceso van a poder desencriptar el jwt

`SECRET_JWT_SEED=This-Is-An-Secr3t_C0d3`

3- 
```
const jwt = require('jsonwebtoken');

const generarJWT = (uid, name) => {

    return new Promise((resolve, reject) => {

        const payload = { uid, name };

        jwt.sign(payload, process.env.SECRET_JWT_SEED, {

            expiresIn: '2h',

        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token')
            };

            resolve(token);

        })
    })

}

module.exports = {
    generarJWT
}
```


4- En donde apliquemos lo del jwt ponemos:

`const token = await generarJWT(usuario.id, usuario.name);`

y el token lo devolvemos dentro de la res.json.

5- Luego se revalida el token
[Revalidar JWT](./Revalidar-JWT.md)