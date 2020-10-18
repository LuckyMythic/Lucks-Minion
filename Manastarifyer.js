const Discord = require('discord.js');
const client = new Discord.Client();

global.mana = false

client.once('ready', () => {
	console.log('logged on');
});
client.on('message', message => {
if (message.content == '-Manaoff') {
  if (message.author.hasPermission('KICK_MEMBERS')) {
      message.react('766853530312376340')
      mana = true
  } else {
    message.reply('You do not have the permission to run this command')
  }
}
if (message.content == '-Manaoff') {
  if (message.author.hasPermission('KICK_MEMBERS')) {
      message.react('766853530312376340')
      mana = false
  } else {
    message.reply('You do not have the permission to run this command')
  }
}

client.on('message', message => {
  if(message.author.bot) return;
    message.react('766853530312376340')
})});

client.login('Token');