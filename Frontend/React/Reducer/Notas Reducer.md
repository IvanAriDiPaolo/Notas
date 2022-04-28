1- Tenemos nuestro arreglo de objetos de Todos

const initialState = [
    {
        id: 1,
        todo: 'Comprar pan',
        done: false
    }
]

2- Se define el reducer, una funcion q recibe estado anterior y accion que es el quien va a modificar el state.

No puede hacer peticiones asyncronas, tiene que resolver lo que se pida con el state y la accion unicamente.

const todoReducer = (state = initialState, action) => {
    if (action?.type === 'add') {
        return [...state, action.payload]
    }

    return state
}

Importante que siempre regrese un nuevo estado

Un return null no se puede hacer.

3- Inicializacion de los estados: 

let todos = todoReducer();

4- Cuando quiero modificar un todo se hace mediante una accion de la  siugiente manera: 

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const addTodoAction = {
    type: 'add',
    payload: newTodo
}

Importante newTodo se suele envair como payload

5- Se envia esa accion o todo al reducer:
 
todos = todoReducer(todos, addTodoAction)

6- Cuando se definen los todos y el dispatch, se le pasan como parametros el reducer y el init que va a ser la que ayude a computar el estado inicial a react

const [todos, dispatch] = useReducer(todoReducer, [], init)

El [] es el initial state, en todo caso el estado ppal de arreglo de objetosvacio.


const init = () => {
    return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }]
}

