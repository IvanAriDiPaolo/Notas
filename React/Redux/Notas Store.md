Se crea el store, la fuente unica de la verdad, donde usamos la funcion

import {createStore, combineReducers} from 'redux';

y importamos tambien todos los reducers que tengamos en nuestra app
import { authReducer } from '../reducers/authReducer';

Usamos el combineReducers para unir todos mismos en un objeto

const reducers = combineReducers({ auth: authReducer, })

Creamos y exportamos el store con el objeto de reducers:

export const store = createStore(reducers);\

Hay que configurar el store:
https://github.com/zalmoxisus/redux-devtools-extension\#usage

Agregar esta linea como segundo argumento del createStore en store.js
window.**REDUX\_DEVTOOLS\_EXTENSION** &&
window.**REDUX\_DEVTOOLS\_EXTENSION**() ----------------

import {createStore, combineReducers} from 'redux' import { authReducer
} from '../reducers/authReducer';

const reducers = combineReducers({ auth: authReducer, })

export const store = createStore(reducers);
