module.exports = (client) => {
	console.log('I am ready to serve you!');

	client.user.setStatus('online');

	client.user.setActivity('HELP! IM NOT DEAD!!!', { type: 'WATCHING' });
};
