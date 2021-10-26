Sirve ppalmente para cuando le pasas una funcion a un componente renderizado en tu componente:

const increment = () => {
	setCounter(counter + 1)
}

y en el render: 

	<ShowIncrement increment={increment} />

y aunque usemos memo en el ShowIncrement siempre se va a volver a disparar la funcion porque al estar guardada la funcion en una constante (increment) ocupa un espacio en memoria, al que cada vez que clickeo va a generar uno nuevo.

Entonces hacemos un useCallback

const increment = useCallback( () => {
	setCounter(counter + 1)
}, [setCounter]);

va a devolver una version memorizada de esa funcion para mandarla como dependencia a otros lugares y react sabe que no cambio porque la dependencia no cambio.

Esto en conjunto con React.memo en ShowIncrement hacen que no vuelva a cargar el componente muchas veces.