Instalar redux-thunk npm install --save redux-thunk

en el store pegamos:

import thunk from 'redux-thunk';

y vamos a aplicar esto como segundo parametro del reducer\> const
composeEnhancers = (typeof window !== 'undefined' &&
window.**REDUX\_DEVTOOLS\_EXTENSION\_COMPOSE**) || compose;

y vamos a pasar de tener esto:

export const store = createStore( reducers,
window.**REDUX\_DEVTOOLS\_EXTENSION** &&
window.**REDUX\_DEVTOOLS\_EXTENSION**() );

a tener esto:

export const store = createStore( reducers, composeEnhancers(
applyMiddleware( thunk ) ) );

El applyMiddleWare se importa de redux

HAY QUE IMPORTAR COMPOSE Y APPLYMIDDLEWARES DE REDUX

import { createStore, combineReducers, applyMiddleware, compose } from
'redux'

* * * * *

Para crear una funcion async hay que crear la funcion con el dispatch
dentro y recibiendolo como parametro:

export const startLoginEmailPassword = (email, password) =\> { return
(dispatch) =\> {

        setTimeout(() => {

            dispatch( login(1234,'pedro'))

        }, 3500);

    }

}
-

Para llamar esta funcion seria:

dispatch(startLoginEmailPassword(email, password));
