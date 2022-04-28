Inicializar proyecto Redux - redux-thunk

1)- Instalar las dependencias
  npm install redux react-redux redux-thunk

2)- Creacion de las carpetas en el src
  types - reducers - rootReducer - store - actions  

Paso N1:
Ejemplo types:
  Dentro de types se crean las acciones que vamos a llamara a realizar por nuestro reducer.
  Son simplemente referencias a la acciones 

// Aca dentro vamos a agregar todas las acciones.
  Entre corchetes se define a que reducer pertenece la accion y luego la accion que realiza.
  export const types = {
      uiOpenModel: '[ui] Open modal',
      uiCloseModal: '[ui] Close modal',
  };

Paso N2:
Ejemplo reducers:
//Aca dentro se van a crear los cambios de estado de nuestro reducer en base a las acciones.
  Debemos importar nuestros types (acciones de referencia).

  import { types } from "../types/types";

Definimos un estado inicial de nuestro reducer en base a lo que queremos que realice

  const initialState = {
      openModal: false
  };

Creamos la estructura de nuestro reducer

  export const uiReducer = ( state = initialState, action ) => {
      switch ( action.type ) {
          case types.uiOpenModel:
              return {
                  ...state,
                  openModal: true
              }

          default:
              return state;
      }
  }

Paso N3:
Ejemplo del rootReducer:
// Este va a ser el combinador de nuestros reducers, que se encargara de que todos esten conectados
1)-Vamos a necesitar importar el combineReducers de redux y nuestros reducers.
2)-Los combinaremos dentro del combineReducers.

  import { combineReducers } from "redux";
  import { uiReducer } from "./uiReducer";
  import { authReducer} from "./authReducer";
  import { calendarReducer} from "./calendarReducer";

  export const rootReducer = combineReducers({
      ui: uiReducer,
      //auth: authReducer,
      //calendar: calendarReducer
  });

Paso N4:
Ejemplo de store:
//En el store vamos a conectar nuestro middleware thunk y habilitar nuestras redux devTools
con nuestros reducers combinados en nuestro rootReducer la estructura es la siguente: 

1)-:

  import { createStore, compose, applyMiddleware } from 'redux';
  import thunk from 'redux-thunk';
  import { rootReducer } from '../reducers/rootReducer';

  const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  export const store = createStore(
      rootReducer,
      composeEnhancers(
          applyMiddleware( thunk )
      )
  );

2)- Debemos importar nuestro store y Provider de react-redux en nuestro App inicial de la aplicacion
Estructura ejemplo: 

  import React from 'react';
  import { Provider } from 'react-redux';

  import { AppRouter } from './router/AppRouter';
  import { store } from './store/store';

  export const CalendarApp = () => {
      return (
          <Provider store={ store }>
              <AppRouter />
          </Provider>
      )
  };


Paso N5:
Ejemplo de actions:
//En nuestra carpeta actions creamos nuestro archivo en el cual armaremos todas las funciones
de nuestras acciones

SINCRONAS:

Ejemplo: archivo ui.js y dentro de el creamos las funciones-acciones

  export const uiOpenModal = () => ({
      type: types.uiOpenModal
  })

  export const uiCloseModal = () => ({
      type: types.uiCloseModal
  })

ASINCRONAS:

Para crear una funcion async hay que crear la funcion con el dispatch dentro y recibiendolo como parametro:

  export const startLoginEmailPassword = (email, password) => {
      return (dispatch) => {

          setTimeout(() => {

              dispatch( login(1234,'pedro'))

          }, 3500);

      }

  }
-----
Para llamar esta funcion seria:

  dispatch(startLoginEmailPassword(email, password));

Extra:
Hooks de Redux

//useDispatch Utilizado para hacer el dispatch de nuestras acciones 
Ejemplo de uso:

  useDispatch // const dispatch = useDispatch();
  dispatch( uiOpenModal );

//useSelector Utilizado para leer las propiedades de los estados de nuestros reducer
Ejemplo de uso:

  useSelector // const state = useSelector( (state) => state );
  const { openModal } = useSelector( (state) => state.ui );
