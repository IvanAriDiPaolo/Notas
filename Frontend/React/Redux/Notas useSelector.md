Dispara un callback que devuelve el estado actual de la app

se hace

import {useSelector} from 'react-redux';

const state = useSelector (state => state.REDUCER)

se puede desestructurar:

const {msgError} = useSelector (state => state.ui)