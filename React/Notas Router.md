import {

BrowserRouter as Router,

Switch,

Route,

Link

} from "react-router-dom";


Por convension es:

return (

<Router>

`	`<div>

`		`<Switch>


El Router va solo en el primer componente de rutas, AppRouter, en los hijos no

Se definen las rutas posibles a cada componente:

<Route exact path='/' component={}/>

El exact es si es igual el link

El path puede ser el que queramos

El component es el que queremos que se muestre en lugar de nustro Componente

Se hace un Navbar con <Link to='./' y donde queramos que muestre.

Si se recibe una ruta que no existe se hace:

<Redirect to='/' />

Redirect dentro del Switch.

\---

En el Navbar que redireccione se puede usar Link o NavLink

el Link es simplemente

<Link to='/'> </Link>

El navLink se puede hacer algo como

<NavLink exact activeClassName='active' className="nav-item nav-link" to="/">Login</NavLink>


\---------------

A los componentes al navegar entre ellos se les quedan guardadas props que las podemos ver en F12 : Components...

Entre ellas:

history, location y match

Se puede desestructurar en los componentes estas props y usarlas.

Por ejemplo el push que te redirecciona:

history.push('/');

O el replace, que cambia el link y hace que no puedas ir para atras con la flechita

history.replace('/');


\----------------

Para extraer info del url usamos useParams:

import { useParams } from 'react-router'

const params = useParams();

console.log(params)



