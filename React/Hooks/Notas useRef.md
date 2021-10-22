Uso principal: Mantener una referencia mutable

Osea si tengo una funcion asyncronica corriendo pero desmonto el componente se genera un error muy grande, el useRef
nos puede ayudar a prevenir eso generando una referencia para saber si esta montado o no y asi generar o no el componente.

Ej: 
    const isMounted = useRef(true);
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])


        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMounted) {

                    setTimeout(() => {
                        setState({
                            data,
                            loading: false,
                            error: null
                        })
                    }, 4000)
                }


            });
    }, [url])


Otro uso: Referencia a un elento de mi DOM con el atributo ref={nombreRef} y que se pueda llamar en un handle con nombreRef.current....