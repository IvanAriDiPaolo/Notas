### Test de acciones asíncronas de acciones para redux



#### Instalamos

##### npm i redux-mock-store

Mock del store que ayuda a ver con que funcion fueron llamadas las acciones, etc.

#### Importamos en el archivo: 

`import confirgureStore from 'redux-mock-store';`



y tambien los middlewares que estemos usando

por ejemplo: `import thunk from 'redux-thunk'`

creamos la constante middlewares y la de mockStore :

`const middlewares = [];`

`const mockStore = configureStore(middlewares);`

y creamos el store con lo que vayamos a testear: 

`const store = mockStore ({`

`auth: {`

​	`uid: 'testing'`

`	name: 'Ivan'`	

`}`

`})`



cuando hagamos un test recordar poner async ya que todo lo que pidamos a store es con await.

