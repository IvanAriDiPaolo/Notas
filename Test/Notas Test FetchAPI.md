Como son funciones llenas de tareas asíncronans se hace una prueba ejecutandola y chequeando lo que yo quiero que suceda.

import { fetchConToken, fetchSinToken } from "../../helpers/fetch"

describe('Tests on helper fetch', () => {

    let token = '';
    
    test('fetchSinToken tests', async () => {

        const resp = await fetchSinToken(
            'auth',
            {
                email: "ivandb@gmail2.com",
                password: "123456"
            },
            'POST'
        );

        expect(resp instanceof Response).toBe(true);

        const body = await resp.json();

        expect(body.ok).toBe("true");

        token = body.token;
        
    })

    test('should validate token and delete event', async () => {

        localStorage.setItem('token', token);
        
        const resp = await fetchConToken(`events/6179df4f7a103de40a5395d1`, {}, 'DELETE');
        const body = await resp.json();
        
        expect(body.msg).toBe('Event not found')
    })
    

})
