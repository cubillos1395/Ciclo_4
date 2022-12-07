const express = require ('express');
const Personas = require('../models/Personas');
const PersonasRouter = express.Router();


// LISTAR PERSONAS
PersonasRouter.get("/", (req,res) => {
    Personas.find()
    .then(datos => res.json({personas: datos}))
    .catch(error => res.json({mensaje: error}));
});

//GUARDAR NUEVAS PERSONAS

PersonasRouter.post("/", (req,res) => {
    const persona = new  Personas (req.body);
    persona.save()
        .then(datos => res.json(datos))
        .catch(error => res.json({mensaje: error}));
});


// ACTULIZAR PERSONA

PersonasRouter.patch("/", (req,res) => {
    const persona = new  Personas (req.body);
    Personas.updateOne({_id: persona._id}, persona)
        .then(datos => res.json(datos))
        .catch(error => res.json({mensaje: error}));
});


// ELIMINAR PERSONA

PersonasRouter.delete("/:id", (req,res) => {
    Personas.deleteOne({_id: req.params.id})
        .then(datos => res.json(datos))
        .catch(error => res.json({mensaje: error}));
});


module.exports = PersonasRouter;



