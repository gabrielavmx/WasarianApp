const express = require('express');
const MealRegistration = require('../models/MealRegistration.js');
const router = express.Router();

router.post('/add', async (req, res) => {
    console.log('Dados recebidos:', req.body);
    try {
        let { id_meta, tipo_refeicao, caloria, data, descricao } = req.body;

        caloria = parseFloat(caloria);

        if (caloria !== undefined && isNaN(caloria)) {
            return res.status(400).json({ error: 'Quantidade de calorias inválida.' });
        }

        const newEntry = await MealRegistration.create({ id_meta, tipo_refeicao, caloria, data, descricao });

        console.log('Novo registro de refeição criado:', newEntry);

        res.status(201).json(newEntry);
    } catch (error) {
        console.error('Erro ao salvar dados:', error.message, error.stack);
        res.status(500).json({ error: 'Erro ao salvar dados de refeição.' });
    }
});

module.exports = router;
