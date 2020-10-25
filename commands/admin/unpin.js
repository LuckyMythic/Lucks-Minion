exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
		if(!message.member.hasPermission("KICK_MEMBERS")){
        return message.channel.send("You don't have the permissions to use this command!");
    }
	else {
	var id = args[0];
	//if (!id) return message.reply('You need to give an ID of the message to unpin');
	if (!id) await message.channel.fetchMessages({ limit: 2 }).then((m) => id = m.array()[1].id);

	message.channel.messages.fetch(id).then((m) => {
		m.unpin().then(() => {
			message.reply('Message unpinned');
			client.log('INFO', `Message with ID of ${id} was pinned in ${message.channel.name} (${message.channel.id}) on guild ${message.guild.name} (${message.guild.id})`);
		});
	}).catch(() => {
		message.reply('Failed to unpin message. Do I have permission?');
		client.log('INFO', `Failed to unpin message with ID of ${id} was unpinned in ${message.channel.name} (${message.channel.id}) on guild ${message.guild.name} (${message.guild.id})`);
	});
};
}
