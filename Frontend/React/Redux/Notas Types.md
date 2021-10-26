Se crea una carpeta types en el src con un archivo js que contenga los types usados en nuestros reducers:

Se le pone start en el nombre del type cuando es un proceso asincrono

```
export const types = {
    
    uiOpenModal: '[ui] Open Modal',
    uiCloseModal: '[ui] Close Modal',

    eventSetActive: '[event] Set Active',
    eventAddNew: '[event] Add New',
    eventClearActiveEvent: '[event] Clear Active',
    eventUpdated: '[event] Event Update',
    eventDeleted: '[event] Event Deleted',

    authChecking: '[auth] Checking login state',
    authCheckingFinish: '[auth] Checking finished',
    authStartLogin: '[auth] Start Login',
    authLogin: '[auth] Login',
    authRegister: '[auth] Start Register',
    authStartTokenRenew: '[auth] Start Token Renew',
    authLogout: '[auth] Logout',
};
```