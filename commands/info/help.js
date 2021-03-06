const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {
    const command = message.content.split(' '); 

    if(command[1] == undefined){
        const embed = new Discord.MessageEmbed()
            .setColor("#FF4500")
            .setTitle("Commands")
            .addFields(
                { name: 'Admin', value:"`addrole` `ban` `purge` `kick` `mute` `removerole` `setbotname` `setbotstatus`"},
                { name: 'Info', value:"`help` `serverinfo` `serverinvite` `uptime` `userinfo`"},
                { name: 'Music', value:"`deletetrack` `summon` `nowplaying` `pause` `resume` `playother` `play` `queue` `skip` `stop` `volume` `search`"},
                { name: 'Fun', value:"`distance` `dogs` `flipcoin` `google` `ping` `rolldice` `setafk` `weather` `beautify`"}
                )
            .addField('Join us for updates and more!', 'https://discord.gg/BXEtkBQ', true)
            .setImage('https://cdn.discordapp.com/attachments/671449376111067136/671451868869820466/rainbow_lines.gif')
            .setFooter("Bot made by LuckyMythical#5528");
        message.channel.send(embed);    
    }

    else if(command[1] != undefined){ 
        fs.readFile(__dirname + '/../../jsonFiles/commands.json', (err, dataJson) => {  
            if (err) throw err;
            let helpMe = JSON.parse(dataJson);
            let commandName = command[1];

            try{
                const embed = new Discord.MessageEmbed()
                    .setColor("#FF4500")
                    .addField(`Command: $${helpMe[commandName].name}`,`Group: ${helpMe[commandName].group}\n`+`Desc: ${helpMe[commandName].desc}\n`+`Usage: ${helpMe[commandName].usage}\n`+`Example: ${helpMe[commandName].example}\n`);
                message.channel.send(embed);    
            }
            catch(error){
                message.channel.send("I could not find that command!");
            }
        });
    }
}
