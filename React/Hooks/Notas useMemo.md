Practicamente es para no volver a renderizar todo un estado o un componente al momento de llamarlo nuevamente o usar algo que lo renderize nuevamente.

    const memory = useMemo(() => process(counter), [counter])

En este caso va a ejecutar la funcion process solamente si cambia el counter, no si otra cosa del componente cambia.

En vez de llamar el process en el onClick de la etiqueta del button se llama a memory.


Hacemos que react se memorize un componente en caso de que los argumentos sean iguales al momento de llamarlo desde otra funcion.