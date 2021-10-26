1- Crear el archivo dentro de carpeta tests\>hooks\>use...

2- Description... Test...

3- Primero se renderiza el hook y desestructurar el resultado:

//Importar render hook import {renderHook} from
'@testing-library/react-hooks';

//Importar el custom hook, en este caso useCounter import {useCounter}
from '../../hooks/...';

const {result} = renderHook( () =\> useCounter());

//La info que me intersa esta en result.current

4- Hacemos expects de typeof y de resultados por defecto:
expect(result.current).toBe(10); // Por defecto expect(typeof
result.current.increment).toBe('function'); // typeof

5- Expects de funciones del hook: Importamos "act" junto al renderHook Y
testeamos las funciones dentro del callback del act:

act(() =\> { increment(); })

Dentro del act cada funcion se ejecuta una vez
