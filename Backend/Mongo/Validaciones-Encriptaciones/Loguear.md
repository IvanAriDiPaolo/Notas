```
const loginUser = async (req, res = response) => {

    const { email, password } = req.body;

    try {

        const usuario = await Usuario.findOne({ email });

        if (!usuario) {
            res.json({
                ok: false,
                msg: 'User or password does not match'
            }, 400)
        };

        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.json({
                ok: false,
                msg: 'User or password incorrect'
            }, 400)
        };

        res.json({
            ok: 'true',
            uid: usuario.id,
            name: usuario.name
        })

    } catch (error) {

        console.log(error)

        res.json({
            ok: false,
            msg: 'Database Error, talk with and admin'
        }, 500)

    }

};
```