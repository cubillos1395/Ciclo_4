const express = require ('express');
const Transacciones = require('../models/Transacciones');
const TransaccionesRouter = express.Router();


// LISTAR transacciones 
TransaccionesRouter.get("/", (req,res) => {
    Transacciones.find()
    .then(datos => res.json({transacciones: datos}))
    .catch(error => res.json({mensaje: error}));
});

//GUARDAR NUEVAS transacciones

TransaccionesRouter.post("/", (req,res) => {
    const transacciones = new  Transacciones (req.body);
    transacciones.save()
        .then(datos => res.json(datos))
        .catch(error => res.json({mensaje: error}));
});


// ACTULIZAR transacciones

TransaccionesRouter.patch("/", (req,res) => {
    const transaccion = new  Transacciones (req.body);
    Transacciones.updateOne({_id: transaccion._id}, transaccion)
        .then(datos => res.json(datos))
        .catch(error => res.json({mensaje: error}));
});


// ELIMINAR transaccion

TransaccionesRouter.delete("/:id", (req,res) => {
    Transacciones.deleteOne({_id: req.params.id})
        .then(datos => res.json(datos))
        .catch(error => res.json({mensaje: error}));
});


module.exports = TransaccionesRouter;



