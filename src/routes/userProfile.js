const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByPk(userId);
        
        if (user) {
            return res.json({
                nome: user.nome,
                createdAt: user.createdAt
            });
        } else {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        return res.status(500).json({ message: 'Erro no servidor', error });
    }
});

module.exports = router;
