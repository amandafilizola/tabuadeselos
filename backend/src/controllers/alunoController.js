const Aluno = require('../models/aluno');

module.exports = {
    async store(req,res) {
        const { name } = req.body;
        const userExists = await Aluno.findOne({name});
        if(userExists) {
            return res.json(userExists);
        }

        const aluno = await Aluno.create({
            name,
            clienteDigital: 0,
            conhecendo: 0,
            ciclo: 0,
            pnl: 0,
            linguagemCorporal:0,
            encantamento:0
        })
        return res.json(aluno)
    },

    async index(req, res) {
        const alunos = await Aluno.find({});
        return res.json(alunos);
    },

    async delete(req, res) {
        const { name } = req.body;
        const aluno = await Aluno.deleteOne({name});
        if(aluno)
            return res.json({delete: true});
    },

    async update(req, res) {
        const { name, clienteDigital, conhecendo, ciclo, pnl, linguagemCorporal, encantamento } = req.body;
        const usuario = await Aluno.findOne({name});

        usuario.clienteDigital = clienteDigital;
        usuario.conhecendo = conhecendo;
        usuario.ciclo = ciclo;
        usuario.pnl = pnl;
        usuario.linguagemCorporal = linguagemCorporal;
        usuario.encantamento = encantamento;

        await usuario.save();
        return res.json(usuario);
    }
}