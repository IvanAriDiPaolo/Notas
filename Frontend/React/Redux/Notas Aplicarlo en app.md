En nuestra rama más alta de la app, la base importamos:

import {Provider} from 'react-redux'; //HOC high order component

en el return de nuestra app se hace:

<Provider store={store}> <AppRouter/> </Provider>
