const userShcema = require('../schemas/user.shcema');

const router = require('express').Router();

router.get('/user/getUsers',async(req,res) => {
    console.log('Listando Todos los Usuario');
    const users = await userShcema.find();
    return res.send(users);
})

router.post('/user/create',async(req,res) => {
    console.log('Creando Usuario');
    await userShcema.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }).then((user) => {
        console.log('Usuario creado correctamente!');
        return res.status(200).send(user);
    }).catch((err) => {
        console.log(`Ocurrio un error ${err.message}`);
        return res.status(500);
    });
})

module.exports = router;