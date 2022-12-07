const mongoose =  require ('../db/ConectionDB');

const Transacciones = mongoose.Schema({

       
    usuario:{
        type: String
    },

    productos:{
        codigo: {
            type: String            
        }
    },
    
    valorTotal:{
        type: Number
    },

    comprador:{
        correo: {
            type: String,
            required: true,
            unique: true

        }     
    },
    
    fecha:{
        type: Date
    },

    codigoCompra:{
        type: String
    },
    
    vendedor:{
        correo: {
            type: String,
            required: true,
            unique: true
        }
        
    },

},{
    colection: "Transacciones",
    versionKey: false
  
});

module.exports= mongoose.model("Transacciones",Transacciones );

