const express = require('express');
const router = express.Router();
const MealRegistration = require('../models/MealRegistration');
const Metas = require('../models/Metas');

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        console.log(`Buscando meta para o usuário: ${id}`);

        if (!id) {
            return res.status(400).json({ message: 'ID de usuário não fornecido.' });
        }

        const meta = await Metas.findOne({
            where: { id_usuario: id }
        });

        if (!meta) {
            console.log(`Meta não encontrada para o usuário: ${id}`);
            return res.status(404).json({ message: 'Meta não encontrada para este usuário.' });
        }

        console.log(`Meta encontrada: ${meta.id_meta}`);

        const lastMeals = await MealRegistration.findAll({
            where: { id_meta: meta.id_meta },
            order: [['createdAt', 'DESC']],
            limit: 3
        });

        if (lastMeals.length > 0) {
            console.log(`Últimas refeições encontradas: ${JSON.stringify(lastMeals)}`);
            res.status(200).json(lastMeals); 
        } else {
            console.log(`Nenhuma refeição encontrada para o id_meta: ${meta.id_meta}`);
            res.status(404).json({ message: 'Nenhuma refeição encontrada para este usuário.' });
        }
    } catch (error) {
        console.error('Erro ao buscar as últimas refeições:', error);
        res.status(500).json({ message: 'Erro ao buscar as últimas refeições.' });
    }
});

module.exports = router;
