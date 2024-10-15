const express = require('express');
const MealRegistration = require('../models/MealRegistration.js');
const Metas = require('../models/Metas.js');
const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        let { id_usuario, tipo_refeicao, caloria, data, descricao } = req.body;
        caloria = parseFloat(caloria);

        if (caloria !== undefined && isNaN(caloria)) {
            return res.status(400).json({ error: 'Quantidade de calorias inválida.' });
        }

        const meta = await Metas.findOne({ where: { id_usuario } });

        if (!meta) {
            return res.status(404).json({ error: 'Meta não encontrada para o usuário fornecido.' });
        }

        const newEntry = await MealRegistration.create({
            tipo_refeicao,
            caloria,
            data,
            descricao,
            id_meta: meta.id_meta
        });

        res.status(201).json(newEntry);
    } catch (error) {
        console.error('Erro ao salvar dados:', error.message, error.stack);
        res.status(500).json({ error: 'Erro ao salvar dados de refeição.' });
    }
});

module.exports = router;
