const Discord = require('discord.js')
const bot = new Discord.Client()

const config = require("./config.json")

// runs on ready foreach guild/channel/server that the bot has access to 
bot.on('ready', () => {
  console.log(bot.user.username)
  //for each guild the bot is in
  bot.guilds.forEach( guild => { 
    let defaultChannel = ''
    guild.channels.forEach( channel => {
      if (channel.type == 'text' && defaultChannel == '') {
        if (channel.permissionsFor(guild.me).has('SEND_MESSAGES')) {
            defaultChannel = channel
        }
      }
    })
  setInterval ( () => {
    //send it to whatever channel the bot has permissions to send on
    defaultChannel.send('It\'s been 30 minutes, time to stand up. 🏃') 
    .catch(console.error)
  }, 1800 * 1000)
 })
})

// bot greeting if someone types Hello in the channel
bot.on('message', message => {
  if (message.content == 'Hello') {
    message.reply('Straight up greetings :upside_down:')
  }
})

bot.login(config.token)