const mongoose =  require ('../db/ConectionDB');

const Usuarios = mongoose.Schema({

    persona:{
        
        correo:{
            type: String,
            required: true,
            unique: true
    
        }
    
    },
    
    usuario:{
        type: String
    },

    clave:{
        type: String
    },

    rol:{
        type: String
    },

    estado:{
        type: String
    }
    

},{
    colection: "Usuarios",
    versionKey: false
});

module.exports= mongoose.model("Usuarios", Usuarios);

