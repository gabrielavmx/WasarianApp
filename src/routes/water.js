// routes/water.js  
const express = require('express');
const WaterConsumption = require('../models/WaterConsumption.js');
const router = express.Router();

router.post('/add', async (req, res) => {
    console.log('Dados recebidos:', req.body); // Verifica o que está chegando
    try {
        // Validação de dados
        let { agua_consumida, id_usuario } = req.body;

        // Converter agua_consumida para número
        agua_consumida = parseFloat(agua_consumida);

        if (isNaN(agua_consumida)) {
            return res.status(400).json({ error: 'Quantidade de água inválida ou ausente.' });
        }

        // Inserir novo registro com apenas 'agua_consumida', outros campos serão undefined por padrão
        const newEntry = await WaterConsumption.create({ agua_consumida, id_usuario });

        console.log('Novo registro criado:', newEntry);

        // Resposta com o registro criado
        res.status(201).json(newEntry);
    } catch (error) {
        console.error('Erro ao salvar dados:', error.message, error.stack);
        res.status(500).json({ error: 'Erro ao salvar dados de consumo de água.' });
    }
});

module.exports = router;