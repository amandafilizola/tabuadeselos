const { Schema, model} = require('mongoose');

const AlunoSchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    clienteDigital: {
        type: Number,
        requires: true
    },
    conhecendo: {
        type: Number,
        requires: true
    },
    ciclo: {
        type: Number,
        requires: true
    },
    pnl: {
        type: Number,
        requires: true
    },
    linguagemCorporal: {
        type: Number,
        requires: true
    },
    encantamento: {
        type: Number,
        requires: true
    },
},{
    timestamps: true,
});
module.exports = model('Aluno', AlunoSchema);