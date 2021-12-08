const {Telegraf} = require('telegraf')



const bot = new Telegraf(token) // Token tutorial in Readme.MD
/*
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 24/7 if you're using Replit (No Hacker Plan) + Uptime Robot.

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
})

app.listen(3000, () => console.log('Finalmente.'))

*/

bot.command("start", async(ctx) => {
 ctx.reply("Saludos, para usar este bot solo necesitas reenviar el mensaje de una persona, y de ahí se te responderá con la ID, el Username y el primer nombre del usuario.\n\nGracias por usar el bot, desarrollado por: @JustSofter")
})
bot.on("message", async(message) => {
  console.log(message.update.message.forward_from)
  if(!message.update.message.forward_from) return message.reply("Reenvia un mensaje de alguien, no de un grupo/usuario que no pueda ser detectado por el bot.")
  message.reply('Username del forward: '+message.update.message.forward_from.username+'\nID: '+message.update.message.forward_from.id+'\nPrimer nombre del forward: '+message.update.message.forward_from.first_name)
}
)



bot.launch()
