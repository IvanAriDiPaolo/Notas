Se crea el reducer de lo que querramos guardar info importamos los types

creamos la funcion con el switch con parametros de state y action

se hace el switch de los distontos types

y se hace el retorno de cada uno de los elementos.

* * * * *

import { types } from "../types/types";

export const authReducer = (state = {}, action) =\> {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.id,
                name: action.payload.displayName,
            };
            
        case types.logout:
            return { };

        default:
            return state;
    }

}
