Como necesito usar rutas dentro de mi test se importa MemoryRouter Si
necesito estar viendo la ruta en particular, los links etc se usa Route

1- Hacemos un mount del componente(porque va a ser uno de otro)
enviandole los props necesarios como el de autenticar 2- Ver si hay que
enviarle un componente como prop se envie como objeto osea

componente = {() =\> { <span>Puede ser cualquier cosa</span>} }

3- Como comunmente se suele mandar un objeto en los props de {...rest} o
{...props}, se crean en el describe

const props = { location: { pathname: '/marvel' } }

Cuando querramos usar el wrapper que hicimos nos va a decir que no se
puede acceder a la ruta porque nbo existe el componente Router, entonces
vamos a usar el componente MemoryRouter de react router dom.

Para ver si el localStorage es llamado se usa

Storage.prototype.setItem = jest.fn(); que permite hacer un
expect(localStorage.setItem).toHaveBeenCalledWith(clave, valor)

///////////////////////////////////////////////////////////////////////////////////////////

import React from "react" import { mount } from "enzyme" import {
MemoryRouter } from "react-router-dom" import { PrivateRoute } from
'../../routers/PrivateRoute'

describe('Tests on <PrivateRutes/>', () =\> {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }
    Storage.prototype.setItem = jest.fn();

    test('should show component if logged and save it in localStorage', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAutenticated={true}
                    component={() =>  <span>Puede ser cualquier cosa</span> }
                    {...props}
                />
            </MemoryRouter>
        )

        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
    });

///////////////////////////////////////////////////////////////////////////////////////////
