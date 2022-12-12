const once = false;
const name = 'interactionCreate';

async function invoke(interaction) {
	if (interaction.isChatInputCommand())
		(await import(`#commands/${interaction.commandName}`)).invoke(interaction);
}

export { once, name, invoke };
