### Sirve para verificar que el jwt no haya sido modificado/fecha cambiada/ etc

#### Se suele hacer un metodo get separado en nuestras rutas para revalidarlo

Objetivo prolongar logueo aunque se haya salido de la app y autenticar el usuario


## Se hace mediante un middleware

1- En la carpeta middlewares creamos `validate-jwt.js`

2- Definimos la funcion recordando q es un middleware y envia el next()

3- Importamos

`const jwt = require('jsonwebtoken')`

4- Codigo en middleware:
```
const {response} = require('express')
const jwt = require('jsonwebtoken')

const validateJWT = (req, res = response , next) => {

    const token = req.header('x-token');
    
    if (!token) {
        return res.json({
            ok: false,
            msg: 'No token'
        }, 400)
    }
    
    try {
        
        const {uid, name} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        )

        req.uid = uid;
        req.name = name;
        
    } catch (error) {
        return res.json({
            ok: false,
            msg: 'Invalid Token'
        },401)
    }

    next()
}


module.exports = {
    validateJWT
}
```

5- Codigo en la ruta:
```
router.get('/renew', [
    validateJWT
], revalidateToken)
```

6- Codigo en el controlador:
```
const revalidateToken = async (req, res = response) => {

    const {uid, name} = req;

    const token = await generarJWT(uid, name);

    res.json({
        ok: 'true',
        token
    })
};

module.exports = {
    createUser,
    loginUser,
    revalidateToken,
}
```