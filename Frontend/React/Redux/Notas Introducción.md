Es un contenedor predecible del estado de la aplicación, osea es una
forma de controlar donde se encuentra la info de mi aplicación en todo
momento y que la modificación de la información sea en una sola via de
manera predecible, asi se prevee cambios accidentales.

Es independiente de react. Es una forma de mantener el estado de la app,
independientemente del framework o librería que se use.

Reducer: Función pura que maneja un estado, el estado le sirve la info a
la vista o página para mostrar la info deseada, pero la vista no
modifica el state directamente. Cuando necesita hacer una modificación o
algo, se recurre a una acción y esa acción es enviada al reducer que
genera el nuevo estado y notifica a la vista-pag.

Componentes de Redux:

Recordando:

Store: Fuente única de la verdad Donde se encuentra la info que mis
componentes consumirían. Voy al store cuando necesito info

State: Va a ser proveido por el store y le pasa la info a la VIEW-VISTA
Al momento que se necesite hacer una acción o algo se dispara una
ACTION. Esa action cae a algo llamado DISPATCHER, que lo recibe, analiza
y lo envía a un reducer especial que incluye todos los REDUCERS que
tiene mi app y despues de encontrar el reducer indicado se genera un
nuevo state.

TODO PROCESO SINCRONO, SIN PETICIONES HTTP NI TAREAS ASINCRONAS.

Si una action ejecuta algo asíncrono se implementa un middleware: Recibe
la tarea, ejecuta la acción, llama API, se notifica que se tiene la
respuesta y se le envía la info al dispatcher que va a ejecutar el
respectivo reducer.
