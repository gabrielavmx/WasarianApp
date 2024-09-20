const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Validação básica para garantir que email e senha foram fornecidos
    if (!email || !password) {
        return res.status(400).json({ message: 'Por favor, insira email e senha' });
    }

    try {
        const user = await User.findOne({ where: { email } });

        // Se o usuário existir, compara a senha fornecida com a senha armazenada
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.senha);
            if (passwordMatch) {
                return res.status(200).json({ message: 'Login bem-sucedido', userId: user.id });
            }
        }

        // Caso o usuário não exista ou a senha não bata, retorna erro de autenticação
        return res.status(401).json({ message: 'Email ou senha inválidos' });

    } catch (error) {
        console.error('Erro durante o login:', error);
        return res.status(500).json({ message: 'Ocorreu um erro no servidor', error });
    }
});

module.exports = router;
