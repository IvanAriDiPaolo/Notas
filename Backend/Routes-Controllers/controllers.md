Creamos el directorio de controllers para manejar cada una de esas rutas que hicimos en routes, son para las funciones que yo tengo definidas para cada:

```
router.post('/', (req, res) => {     | Deste el callback osea desp de '/', ....         
    console.log('se require el /')   |            
    res.json({                       |       
        ok: 'true',                  | Para todo esto            
        msg: 'post /'                |             
    })                               |
})                              
```
y en el controlador quedaria:
```
const createUser = (req, res) => {
    console.log('se require el /')
    res.json({
        ok: 'true',
        msg: 'post /'
    })
};
```

con el respectivo export en el archivo:

```
module.exports = {
    createUser,
}

```

y en el auth.js de routes queda el siguiente import:

`const {createUser} = require('../controllers/auth');`