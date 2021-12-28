const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token } = require(`../Config/config.js`);
const fs = require('fs');

const commands = [];
const commandFiles = fs.readdirSync("./Komendy/Slash-Komendy").filter(file => file.startsWith('Komenda-Slash'));

// Place your client and guild ids here
const clientId = '805872253282811946';
const guildId = '770930426767998987';

for (const file of commandFiles) {
	const command = require(`../Komendy/Slash-Komendy/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();