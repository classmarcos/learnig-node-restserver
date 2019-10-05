const jwt = require('jsonwebtoken');
//=================
//Verificar TOKEN
//=================

let verificaToken = (req, res, next) => {
    let token = req.get('token'); //Autorizacion

    jwt.verify(token, process.env.SEED, (err, decode) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            });
        }

        req.usuario = decode.usuario;
        next();
    });

};


//==================
//verifica AdminRole
//===================

let verificaAdmin_Role = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es Administrador'
            }
        });
    }


};

module.exports = {
    verificaToken,
    verificaAdmin_Role
}