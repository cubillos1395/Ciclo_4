const express = require ('express');
const Usuarios = require('../models/Usuarios');
const UsuariosRouter = express.Router();



// LISTAR usuarios
UsuariosRouter.get("/", (req,res) => {
    Usuarios.find()
    .then(datos => res.json({usuarios: datos}))
    .catch(error => res.json({mensaje: error}));
});

//GUARDAR NUEVAS usuarios

UsuariosRouter.post("/", (req,res) => {
    const usuario = new  Usuarios (req.body);
    usuario.save()
        .then(datos => res.json(datos))
        .catch(error => res.json({mensaje: error}));
});


// ACTULIZAR usuario

UsuariosRouter.patch("/", (req,res) => {
    const usuario = new  Usuarios (req.body);
    Usuarios.updateOne({_id: usuario._id}, usuario)
        .then(datos => res.json(datos))
        .catch(error => res.json({mensaje: error}));
});


// ELIMINAR usuario

UsuariosRouter.delete("/:id", (req,res) => {
    Usuarios.deleteOne({_id: req.params.id})
        .then(datos => res.json(datos))
        .catch(error => res.json({mensaje: error}));
});

// Login

UsuariosRouter.post("/login", (req,res) => {
    Usuarios.findOne({usuario: req.body.usuario, clave: req.body.clave})
         .then(datos => res.json({usuarios: datos}))
         .catch(error => res.json({mensaje: error}));
});

module.exports = UsuariosRouter;
