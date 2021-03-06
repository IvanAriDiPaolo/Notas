### 1- Hacer install de las librerias de pruebas: { Pasos instalación Enzyme
#### React 17 en adelante: 

1.1 Instalamos Enzyme : 

###### npm install --save-dev enzyme

1.2 Instalamos Enzyme-to-json :

###### npm install --save-dev enzyme-to-json

1.3 Instalamos Adaptador para React 17 (noten que agregamos algo
adicional al final para que pueda correr) : 

###### npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps

1.35 Y tambien esto si tenemos que testear custom hooks: 

###### npm install --save-dev @testing-library/react-hooks



1.45 Y si hacemos tests de reducers usando store:

https://www.npmjs.com/package/redux-mock-store

##### npm i redux-mock-store



1.4 En el archivo src/setupTests.js agregamos:

```

import Enzyme from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { createSerializer } from 'enzyme-to-json';



Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

```

2- Ejecutamos npm test para ver que todo ande bien.

3- Creamos la carpeta 'tests' y dentro de ella el archivo que querramos
probar, por ejemplo si quiero probar el archivo ListItem que esta en mi
src/components/ListItem tengo que crear la carpeta components en mi
carpeta de tests para seguir el path correctamente.

4- Hacemos un describe sobre lo que estamos testeando (Opcional, esta
bueno igual). Buen ejemplo de desc: 'Pruebas en <ListItem/>'

5- Creamos el test con una descripcion de lo que tendria que cumplir la
prueba.

6- En el callback del test ejecutamos la prueba creando el wrapper:

//Primer prueba hacer match con snapshot (esta bueno porque sirve para
las siguientes.) //Hay que ver que shallow se importe de enzyme const
wrapper = shallow(<ListItem/>) //Recordar importar el componente que
hacemos shallow

7- Como la primera prueba suele ser una prueba para ver si coincide lo
que nos da se hace el siguiente expect

expect(wrapper).toMatchSnapshot();

// y se nos va a crear una carpeta con snapshots si salio bien que
deberia mostrarnos un html o xml en el js que crea sobre lo que hicimos
el test.

8- En caso de que cambiemos algo en el archivo base nos va a tirar que
no coincide con el snapshot, si es un cambio que sirve es apretar la u
que se actualiza el snapshot, sino es una verificacion del error y lo
corregimos.

9- Si el componente que queremos probar tiene importado props, lo que
hacemos es en el test de ese componente dentro de la desc creamos 2
constantes que puedan reemplazar esas props para poder probarlo.

{shallow(<ListItem cant={cantidad} saludo={saludo})}

Siempre es recomendable en el componente base crear el PropTypes para verificar cuando existan.

Desp de hacer esto nos va a tirar que no matchea con el comp anterior entonces lo acutalizamso con la u

Con esta prueba esta bien pero se le pueden agergar más, como por ejemplo si contiene elementos del html. 

10- Cuando el wrapper ya lo empezemos a usar varias veces en distintos tests del mismo archivo podemos moverlo al desc para que sea reutilizable.

11- Para evaluar los elementos de un componente primero tenemos que encontrar esos elementos en el componente con un wrapper.find('p') la p simboliza el elemento h1 h2 p ...

12- Por ejemplo para evaluar una img y quiero comprobar el src y el alt se puede hacer:

const img = wrapper.find('img');

y podemos extraerlos asi: img.props().src o img.props().alt o img.prop('src') o img.prop('alt')

y de ahi se hace

expect(img.prop('src')).toBe(url).

Otro ejemplo podria ser:


        const div = wrapper.find('div');
        const className = div.prop('className');
    
        expect(className.includes('card')).toBe(true);

-----------------

13- Testear un input

13.1- Hacer el find del elemento

13.2- hacer un .simulate del elemento, si es un boton es .simulate('click'), si es un texto hacer ('change')
Tendria que tirar error porque node no detecta el cuadro y el evento en si

13.3- Para mandar el evento hacemos:

    input.simulate('change', {target: {value})

13.4- Previamente definimos el value ese

    const value = "Hola Mundo"


-----------------


14- Testear submit

14.1-

        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        })

14.2- Hacer un beforeEach en el desc para que se ejecuten funciones antes de cada test

        const value = 'Hello World'
        
        wrapper.find('input').simulate('change', { target: { value } });
    
        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        })
    
        // expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        
        expect(wrapper.find('input').prop('value')).toBe('');

----------------

15- Test Componente con Custom Hook - Mock - mock - CUANDO YA TESTEAMOS EL CUSTOM HOOK EN OTRO TEST SE USA MOCK

15.1- Tener el custom hook importado, y abajo de los imports hacer: 

jest.mock('IMPORT DEL CUSTOM HOOK') 

15.2- Hay que falsear la data para poder probarlo, porque ya con esa funcion de jest entra en el custom hook segun lo que el hook nos devuelve:

Si el hook devuelve esto:
    const [state, setState] = useState({
        data: [],
        loading: true
    });

entonces para falsear la data en los tests tendria que poner esto:
(ESTO PONERLO EN EL PRIMERO Y IR CAMBIANDO SEGUN VAYAMOS AVANZANDO EN LAS PRUEBAS)

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

Y despues en el segundo test se cambian los datos segun va cambiando la parte que vayamos a testear: 

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/photo.jpg',
            title: 'Testt'
        }];
    
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

Y asi segun lo que testeas vas cambiando las cosas si hacen falta.


--------------------

16- Test Custom Hook - LIBRERIA react-hooks-testing-library

16.1- No se puede hacer match con snapshot porque no hay nada que se renderize, es una funcion sin return en JSX.

16.2- Copiamos y pegamos en el test la linea que usa el componente que usa el hook, la cual se extre lo que necesitamos del hook por ej:

 const { data: images, loading } = useFetchGifs(category);

16.3- Importar renderHook de la libreria
import {renderHook} from '@testing-library/react-hooks';

Y al final lo de 16.2 pasa a estar asi: 

    renderHook( () => useFetchGifs('One Punch'))

este renderHook se suele desestructurar {} algo de lo siguiente:

      result: { all: [Getter], current: [Getter], error: [Getter] },
      rerender: [Function: rerenderHook],
      unmount: [Function: unmountHook],
      waitFor: [AsyncFunction: waitFor],
      waitForValueToChange: [AsyncFunction: waitForValueToChange],
      waitForNextUpdate: [AsyncFunction: waitForNextUpdate]

y en la mayoria de los casos se suele hacer esto:

    const { result } = renderHook(() => useFetchGifs('One Punch'))
    const {data, loading} = result.current;

16.4- Se puede trabajar esperando un cambio en el estado del hook con el
waitForNextUpdate que sirve cuando el return del hook es un setState,
devuelve promise
