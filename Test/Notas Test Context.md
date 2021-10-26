Test del componente <HomeScreen/>

Tan facil como hacer en el wrapper lo siguiente:

    const user = {
        name: 'Ivan',
        email: 'Ivandipa8arrobagmailpuntocom'
    }

    const wrapper = shallow(//Cambiar a mount
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    )

El shallow va a mostrarnos unicamente el:

Componente del context, nop el <HomeScreen/> entonces lo cambiamos para
mount.

A veces nos tira un error gigante y es porque el context intenta
renderizar todos locomponentes que estan dentro de el, entonces tenemos
que mandarle los values que le envia a este componente creando el el
describe:

const contextValue = { dispatch: jest.fn(), user: { logged: false } }

Así esta llamado en el componente original:
<AuthContext.Provider value={{user, dispatch}}>

entonces le tenemos que mandar lo del contextValue:
