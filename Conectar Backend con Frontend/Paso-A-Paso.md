1- Creamos .env.development y .env.production en root de nuestro app de react

2- Creamos la variable de entorno:

`REACT_APP_API_URL=http://localhost:4000/api` para development - SI O SI HTTP:!!
`REACT_APP_API_URL=dominio del backend` para produccion

3- Creamos los reducers, types, etc de los procesos asincronos que falten

4- Disparar la accion HTTP y traer informacion del backend.
Vamos a crear un helper en el front de un fetchAPI: 

```
const baseURL = process.env.REACT_APP_API_URL;

const fetchSinToken = (endpoint, data, method = 'GET') => {
    const url = `${baseURL}/${endpoint}`; // localhost:4000/api/...

    if (method === 'GET') {
        return fetch(url); // Si es un GET es tan facil como esto
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json', // Toma lo que le mandemos en la data como un json
            },
            body: JSON.stringify(data) // Devuelve la data como objeto
        })
    }
}

export {
    fetchSinToken
}
```

Practicamente con eso se linkea con el back.

Ejemplo de la peticion al back:

```
const resp = await fetchSinToken('auth', { email, password }, 'POST')
const body = await resp.json();
```


Ejemplo completo: 

```
import Swal from 'sweetalert2'
import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";

export const startLogin = (email, password) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('auth', { email, password }, 'POST')
        const body = await resp.json();

        console.log(body.ok)
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(
                login({
                    uid: body.uid,
                    name: body.name
                })
            )
        }else{
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

const login = (user) => ({
    type: types.authLogin,
    payload: user
})
```