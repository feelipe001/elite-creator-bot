require('dotenv').config();
const { Telegraf } = require('telegraf');
const express = require('express');
const app = express();
app.use(express.json());

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(`🚀 Bem-vindo ao *Elite Creator Bot*!

Aqui você aprende a criar fotos impossíveis com IA – direto no seu celular, com 1 clique.

📸 Curso disponível: *Clone com IA*
💰 Investimento: R$47 (acesso vitalício)

Clique abaixo para garantir seu acesso:`, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "💳 Pagar agora (Pix/Cartão)", url: "https://seulink.mercadopago.com" }]
      ]
    }
  });
});

app.post('/webhook', (req, res) => {
  const { status, metadata } = req.body;
  if (status === 'approved') {
    const telegramId = metadata?.telegram_id;
    if (telegramId) {
      bot.telegram.sendMessage(telegramId, `✅ Pagamento confirmado!

🎓 Aqui está seu acesso imediato ao curso *Clone com IA*:
📂 https://drive.google.com/SEULINK`);
    }
  }
  res.sendStatus(200);
});

bot.launch();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
