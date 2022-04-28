##### Instalar el paquete:

[BCrypt](https://www.npmjs.com/package/bcrypt)

1- `npm i bcryptjs`
2- En nuestro contolador: 

`const bcrypt = require('bcryptjs')`

3- Encriptar antes de guardarlo en la base de datos

```
const salt = bcrypt.genSaltSync(); // Entre parentesis la cantidad de vueltas a la encriptacion

usuario.password = bcrypt.hashSync(password, salt);
```

4- Para validar la contraseña guardada: 

`const validPassword = bcrypt.compareSync(password, usuario.password);`

5- Loguear un usuario:

[Ejemplo](./Loguear.md)