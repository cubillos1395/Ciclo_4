const express = require ('express');
const bodyParser= require('body-Parser');
const app = express();
const cors = require('cors');
const PersonasRouter = require('./routers/PersonasRouter');
const UsuariosRouter = require('./routers/UsuariosRouter');
const TransaccionesRouter = require('./routers/TransaccionesRouter');
const ProductosRouter = require('./routers/ProductosRouter');

app.use (cors());
app.use(bodyParser.json()); 

//PERSONAS
app.use("/personas", PersonasRouter);

app.use("/usuarios", UsuariosRouter);

app.use("/transacciones", TransaccionesRouter);

app.use("/productos", ProductosRouter)

app.listen(5000);
