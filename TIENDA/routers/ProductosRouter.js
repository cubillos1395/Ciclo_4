const express = require('express');
const Productos = require('../models/Productos');
const ProductosRouter = express.Router();

//Listar Productos
ProductosRouter.get("/", (req, res) =>{
    Productos.find()
    .then(datos => res.json({Productos: datos}))
    .catch(error => res.json({mensaje: error}));

});

//Guardar nueva Producto
ProductosRouter.post("/", (req, res) =>{
    const Producto = new Productos(req.body);
    Producto.save()
    .then(datos => res.json(datos))
    .catch(error => res.json({mensaje: error}));

});

//Modificar una Producto
ProductosRouter.patch("/", (req, res) =>{
    const Producto = new Productos(req.body);
    Productos.updateOne({_id: Producto._id}, Producto)
    .then(datos => res.json(datos))
    .catch(error => res.json({mensaje: error}));

});

//Eliminar Producto
ProductosRouter.delete("/:id", (req, res) =>{
    Productos.deleteOne({_id: req.params._id})
    .then(datos => res.json(datos))
    .catch(error => res.json({mensaje: error}));

});

module.exports = ProductosRouter;
