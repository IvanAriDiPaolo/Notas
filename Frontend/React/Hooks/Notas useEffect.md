El useEffect se puede ejecutar en distintas fases dependiendo como esté indicado:

useEffect = () => {(
	ESTA ES LA FASE DE MONTAJE, OSEA SE EJECUTA CUANDO SE MONTA EL COMPONENTE
), []}


useEffect = () => {(
	Se ejecuta cuando cambie el estado o variable numeros
), [numeros]}


useEffect = () => {(
	console.log('Componente montado')
	return () => {
		console.log('Componente desmontado')
	}
), []}

Fase de desmontaje, cuando el componente se va de la pantalla practicamente...

