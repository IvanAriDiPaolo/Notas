Paquete para hacer validaciones de info recibida mediante middlewares
[Documentación](https://express-validator.github.io/docs/)

## npm i express-validator

extraemos en nuestra route/x.js el check del express validatro:

`const {check} = require('express-validator')`

##### En las rutas ponemos los middlewares entre path y la funcion que ejecute la ruta:

`routes.post('/new', [], crearUsuario`

estos corchetes van a terminar quedando  de la siguiente forma:

```
routes.post('/new', [

], crearUsuario
```

### Usamos el check para verificar cada cosa con el siguiente formato

`check('COSA-A-VERIFICAR', 'TEXTO-DE-ERROR').VALIDACIONES`

#### Ejemplo:

```
routes.post('/new', [
    check('name', 'Enter a valid name').not().isEmpty(),
    check('email', 'Enter a valid email').isEmail(),
    check('password', 'Enter a valid password with more than 6 chars').isLength(6),
], crearUsuario)
```

### Pero para terminar de realizar el manejo de errores en el controller de nuestro metodo hay que hacer:

y para validar esto se suele hacer:

`const errors = validationResult(req);`

```
if (!errors.isEmpty()) {
    return res.json({
        ok: false,
        errors: errors.mapped()
    }, 400)
}
```

#### Para no tener que repetir esto en cada controlador se hace un custom middleware:

en este caso para que no pase de los errores:

##### Se crea la carpeta middlewares en el root

#### Caso comun es crear el middleware para controlar los fields/campos con el siguiente codigo:

```
const { responde } = require('express');
const {validationResult} = require('express-validator');

const validateFields = (req, res = response, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.json({
            ok: false,
            errors: errors.mapped()
        }, 400)
    }
    
    next();
}

module.exports = {
    validateFields,
    
}
```

Lo mas importante es recordar el callback next() para que pase al siguiente middleware o para que finalice de controlar el metodo.

Este custom middleware se importa en las rutas y se usa como un middleware mas en el metodo:

`const { validarCampos } = require('../middlewares/validate-fields')`

```
router.post('/new', [
    check('name', 'Enter a valid name').not().isEmpty(),
    check('email', 'Enter a valid email').isEmail(),
    check('password', 'Enter a valid password with more than 6 chars').isLength(6),
    validateFields,
], createUser)
```
Sin parentesis