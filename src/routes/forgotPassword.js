const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wasarianapp1@gmail.com',
    pass: 'hfrdtbapzniwkosz',
  },
});

router.post('/reset', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const code = Math.floor(100000 + Math.random() * 900000);
    user.resetPasswordToken = code;
    user.resetPasswordExpires = Date.now() + 3600000; // Expira em 1 hora
    await user.save();

    const mailOptions = {
      from: 'wasarianapp1@gmail.com',
      to: user.email,
      subject: 'Código de Redefinição de Senha - Wasarian',
      text: `Você está recebendo este e-mail porque solicitou a redefinição de senha da sua conta.\n\n
      Seu código de redefinição de senha é: ${code}\n\n
      Se você não solicitou isso, ignore este e-mail e sua senha permanecerá inalterada.\n`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'E-mail com o código de redefinição de senha enviado com sucesso' });
  } catch (error) {
    console.error('Erro ao processar a solicitação de redefinição de senha:', error);
    res.status(500).json({ error: 'Erro ao enviar e-mail de redefinição de senha' });
  }
});

router.post('/validate-code', async (req, res) => {
  const { email, code } = req.body;

  try {
    const user = await User.findOne({ where: { email, resetPasswordToken: code } });
    if (!user || user.resetPasswordExpires < Date.now()) {
      return res.status(400).json({ error: 'Código inválido ou expirado' });
    }

    res.status(200).json({ message: 'Código válido, você pode redefinir sua senha' });
  } catch (error) {
    console.error('Erro ao validar o código:', error);
    res.status(500).json({ error: 'Erro ao validar o código' });
  }
});

router.post('/reset-password', async (req, res) => {
  const { email, code, newPassword } = req.body;

  try {
    const user = await User.findOne({ where: { email, resetPasswordToken: code } });
    if (!user || user.resetPasswordExpires < Date.now()) {
      return res.status(400).json({ error: 'Código inválido ou expirado' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10); 

    user.senha = hashedPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    await user.save();

    res.status(200).json({ message: 'Senha redefinida com sucesso' });
  } catch (error) {
    console.error('Erro ao redefinir a senha:', error);
    res.status(500).json({ error: 'Erro ao redefinir a senha' });
  }
});

module.exports = router;
