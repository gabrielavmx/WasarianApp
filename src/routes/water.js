const express = require('express');
const WaterConsumption = require('../models/WaterConsumption.js');
const Metas = require('../models/Metas.js');
const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        let { agua_consumida, id_usuario } = req.body;

        agua_consumida = parseFloat(agua_consumida);

        if (isNaN(agua_consumida)) {
            return res.status(400).json({ error: 'Quantidade de água inválida ou ausente.' });
        }

        const meta = await Metas.findOne({ where: { id_usuario } });

        if (!meta) {
            return res.status(404).json({ error: 'Meta não encontrada para o usuário fornecido.' });
        }

        const newEntry = await WaterConsumption.create({
            agua_consumida,
            id_meta: meta.id_meta
        });

        res.status(201).json(newEntry);
    } catch (error) {
        console.error('Erro ao salvar dados:', error.message, error.stack);
        res.status(500).json({ error: 'Erro ao salvar dados de consumo de água.' });
    }
});

module.exports = router;
