Importar:

import '@testing-library/jest-dom';

Al igual que testear un custom hook nuestro usamos: jest.fn() dentro de
los metodos de nuestro custom hook importado como Mock

const historyMock = { push: jest.fn(), replace: jest.fn(), location:
jest.fn(), listen: jest.fn(), createHref: jest.fn() },

createmos mas funciones de las que tenemos que utilizar pero como cuando
itenntamos llamar el custom hook nos tira que no las detecta hay que
definirlas igual. El error nos lo tira cuando llamaos esta propiedad
dentro de un componente y lo ponemos como prop.

/////////////////

import { mount } from "enzyme" import { MemoryRouter, Router } from
"react-router-dom"; import { AuthContext } from
"../../auth/AuthContext"; import { Navbar } from
"../../components/ui/Navbar" import { types } from "../../types/types";
import '@testing-library/jest-dom';

describe('Tests on <Navbar/>', () =\> {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'ivan',
            logged: true
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('should match snapshot', () => {


        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('ivan')
    });

    test('should call logout and useHistory ', () => {

        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });



    });

})
