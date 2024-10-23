const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const crypto = require('crypto');
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

    const token = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();

    const resetLink = `http://${req.headers.host}/resetpassword/${token}`;

    const mailOptions = {
      from: 'wasarianapp1@gmail.com',
      to: user.email,
      subject: 'Redefinição de Senha - Wasarian',
      text: `Você está recebendo este e-mail porque solicitou a redefinição de senha da sua conta.\n\n
      Por favor, clique no link abaixo ou cole no seu navegador para concluir o processo:\n\n
      ${resetLink}\n\n
      Se você não solicitou isso, ignore este e-mail e sua senha permanecerá inalterada.\n`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'E-mail de redefinição de senha enviado com sucesso' });
  } catch (error) {
    console.error('Erro ao processar a solicitação de redefinição de senha:', error);
    res.status(500).json({ error: 'Erro ao enviar e-mail de redefinição de senha' });
  }
});

module.exports = router;
