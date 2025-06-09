import telebot

TOKEN = '8055140352:AAG3dv2lZkUv_tscm61ZT6CK1oHjW95-GZE'
bot = telebot.TeleBot(TOKEN)

@bot.message_handler(commands=['start'])
def send_welcome(message):
    bot.send_message(message.chat.id, "🚀 Bem-vindo! Aqui você aprende a criar fotos com IA.\n\n👉 Use os botões abaixo para acessar os recursos.")

bot.polling()
