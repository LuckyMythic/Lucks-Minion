exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
		if(!message.member.hasPermission("KICK_MEMBERS")){
        return message.channel.send("You don't have the permissions to use this command!");
    }
	else {
	var id = args[0];
	//if (!id) return message.reply('You need to give an ID of the message to pin');
	if (!id) await message.channel.fetchMessages({ limit: 2 }).then((m) => id = m.array()[1].id);

	message.channel.messages.fetch(id).then((m) => {
		m.pin().then(() => {
			message.reply('Message pinned');
			client.log('INFO', `Message with ID of ${id} was pinned in ${message.channel.name} (${message.channel.id}) on guild ${message.guild.name} (${message.guild.id})`);
		});
	}).catch(() => {
		message.reply('Failed to pin message. Do I have permission? Are there already 50 pins?');
		client.log('INFO', `Failed to pin message with ID of ${id} was pinned in ${message.channel.name} (${message.channel.id}) on guild ${message.guild.name} (${message.guild.id})`);
	});
};
}
exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 2
};

exports.help = {
	name: 'pin',
	category: 'Moderation',
	description: 'Pins a message. If no message ID given, pins one message above',
	usage: 'pin\n pin [message ID]'
};
