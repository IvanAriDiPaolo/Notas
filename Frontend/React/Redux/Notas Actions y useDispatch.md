Creamos en el src la carpeta actions

Se agrupan las acciones que tienen que ver con cada cosa en respectivos archivos:

no son mas que funciones

-----

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

//Se puede sacar el retunr{} y envolver todo entre parentesis

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

-----


se importa el useDispatch en el archivo que tengamos que usar el reducer:


import { useDispatch } from 'react-redux'

const dispatch = useDispatch();

y usamos el dispatch de lo que tengamos que hacer:


dispatch (login(12345, 'ivansito'))

obviamente importando login de nuestra carpeta de src>actions>auth

-----------
