1- Desp de hacer el shallow y matchear comp con el snapshot 2- Hacemos
const wrapper = mount(<TodoApp/>)

El shallow es mas del componentes, el mount es mas general, sirve para
despues poder usar el act:

        act(() => {
            wrapper.find('AddTodo').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('AddTodo').prop('handleAddTodo')(demoTodos[1]);
        })
