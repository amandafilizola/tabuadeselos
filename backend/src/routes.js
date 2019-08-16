const express = require('express');
const AlunoController = require('./controllers/alunoController');
const router = express.Router();

// router.get('/',(req, res)=>{
//     return res.json({message: `Hello ${req.query.name}`});
// });

router.get('/alunos',AlunoController.index);
router.post('/alunos', AlunoController.store);
router.put('/alunos/:name/', AlunoController.update);
router.delete('/alunos', AlunoController.delete);
module.exports = router;