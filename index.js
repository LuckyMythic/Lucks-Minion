const Discord = require('discord.js');
const config = require("./jsonFiles/config.json");
const Enmap = require("enmap");
const client = new Discord.Client();
const fs = require('fs');
client.config = config;
const CHANNEL = 'logs';
var mana = false;
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();

fs.readdir("./commands/music/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/music/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/admin/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/admin/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/randomstuff/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/randomstuff/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/info/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/info/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/games/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/games/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});
client.once('ready', () => {
	console.log('logged on');
});
//message update
client.on('messageUpdate', function(oldMessage, newMessage) {

    if (newMessage.channel.type == 'text' && newMessage.cleanContent != oldMessage.cleanContent) {

        //log to console
        console.log('[' + newMessage.guild.name + '][#' + newMessage.channel.name + '][UPDMSG] ' +
            newMessage.author.username + '#' + newMessage.author.discriminator + ':\n\tOLDMSG: ' +
            formatConsoleMessage(oldMessage) + '\n\tNEWMSG: ' + formatConsoleMessage(newMessage));

        //post in the guild's log channel
        var log = newMessage.guild.channels.find('name', CHANNEL);
        if (log != null)
            log.sendMessage('**[Message Updated]** *' + newMessage.author + '*:\n*Old Message*: ' + oldMessage.cleanContent +
                '\n*New Message*: ' + newMessage.cleanContent);
    }

});
//client.on('message', message => {
//if (message.content == '-Manaon') {


//      mana = true

//}
//if (message.content == '-Manaoff') {


//      mana = false

//}
//if (mana = true) {
//	message.react('766853530312376340')
//}
//if (mana = false) {
//	return;
//}

//client.on('message', message => {
//  if(message.author.bot) return;
//    message.react('766853530312376340')
//})});

client.login(config.token);

