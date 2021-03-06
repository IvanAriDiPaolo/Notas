1- Se suele testear que retorne valores por defecto primero

2- Se testea que autentique valores y luego se hace un test para cada
accion que tiene

3- Se hace un "demo", array de objetos para usarlo como fuente de testeo
de los reducers en la carpeta fixture dentro de la carpeta tests.
Tambien hay q importar la carpeta types (si existe) que esta en el src
para usar las diferentes tipos de acciones del reducer.

import { authReducer } from "../../auth/authReducer" import { types }
from "../../types/types";

describe('test on authReducer', () =\> {

    const user = {
        name: 'ivan'
    }
    
    test('should return default state', () => {
        const state = authReducer(user, {});
    
        expect(state).toBe(user);
    })
    
    test('should autenticate and set user name', () => {
    
        const authAction = {
            type: types.login,
            payload: user
        }
    
        const state = authReducer(user, authAction)
    
        expect(state.logged).toBe(true);
        expect(state).toEqual({
            name: 'ivan',
            logged: true
        })
    })
    
    test('should delete username and set logged to false', () => {
    
        const authAction = {
            type: types.logout,
            payload: user
        }
    
        const state = authReducer(user, authAction)
    
        expect(state.logged).toBe(false);
        expect(state.name).toBeUndefined();
        expect(state).toEqual({
            name: undefined,
            logged: false
        })
    })

})

/////////////////////////////////////////////////////////////////////////////////

import { todoReducer } from
'../../../components/08-useReducer/todoReducer' import {demoTodos} from
'../../fixtures/demoTodos'

describe('Test on todoReducer', () =\> {

    test('should return default values', () => {
        const state = todoReducer(demoTodos, {})
    
        expect(state).toBe(demoTodos)
    });
    
    test('should add a todo', () => {
        
        const demoNewTodo = {
            id: 3,
            desc: 'Learn Mongo',
            done: false
        }
    
        const addTodoAction = {
            type: 'add',
            payload: demoNewTodo
        }
    
        const state = todoReducer(demoTodos, addTodoAction)


        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, demoNewTodo]);
    });
    
    test('should delete a todo', () => {
        
        const deleteTodoAction = {
            type: 'delete',
            payload: 3
        };
    
        const state = todoReducer(demoTodos, deleteTodoAction)
    
        // expect(state).toEqual([...demoTodos, demoNewTodo]);
        expect(state.length).toBe(2);
        
    });
    
    test('should toggle a todo', () => {
        
        const toggleTodoAction = {
            type: 'toggle',
            payload: 2
        };
        
        const state = todoReducer(demoTodos, toggleTodoAction);
    
        expect(state[0].done).toBe(false);
        expect(state[1].done).toBe(true);
    
    });

})
