Practicamente es igual q useEffect pero sive para devolver estilados, etc.


    const pTag = useRef();

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect())
    }, [quote])






                <p
                    className='mb=0'
                    ref={pTag}
                >
                    {quote}
                </p>


Devuelve toda la data de estilado del <p> como JSON