import fs from 'fs';

const once = true;
const name = 'ready';

async function invoke(client) {
	const commands = fs
		.readdirSync('./events/commands')
		.filter((file) => file.endsWith('.js'))
		.map((file) => file.slice(0, -3));

	const commandsArray = [];

	for (let command of commands) {
		const commandFile = await import(`#commands/${command}`);
		commandsArray.push(commandFile.create());
	}

	client.application.commands.set(commandsArray);

	console.log(`Successfully logged in as ${client.user.tag}!`);
	console.log('Created By - Marshy!');
	console.log('https://github.com/marshxan');
	console.log('Created By - Marshy!');
	console.log(`Successfully logged in as ${client.user.tag}!`);
}

export { once, name, invoke };

// __  __                _           
// |  \/  |              | |          
// | \  / | __ _ _ __ ___| |__  _   _ 
// | |\/| |/ _` | '__/ __| '_ \| | | |
// | |  | | (_| | |  \__ \ | | | |_| |
// |_|  |_|\__,_|_|  |___/_| |_|\__, |
// 							  __/ |
// 							 |___/ 