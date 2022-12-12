import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';


const create = () => {
	const command = new SlashCommandBuilder()
		.setName('badge')
		.setDescription(
			'Get The Discord Dev Badge! (Active Bot Dev Badge Bot Made By Marshy)'
		)
		.setDMPermission(false);

	return command.toJSON();
};

const invoke = (interaction) => {
	const guild = interaction.guild;

	const embed = new EmbedBuilder().setTitle(guild.name).addFields([
		{
			name: 'You Have Now Got The Badge!',
			value: "[Please Read The Support Post From Discord](https://support-dev.discord.com/hc/en-us/articles/10113997751447-Active-Developer-Badge) Also... Make Sure Your Discord Server Community Settings Are Toggled To On!",
			inline: true,
		},
		{
			name: 'Claim The Badge Blow!',
			value: "[Click Me To Claim The Badge (Can Take Upto 0/48 Hours)](https://discord.com/developers/active-developer) Also... Please Promote The [Github](https://github.com/Marshxan/Discord-DevBadge) To Everyone You Know! If They Want The Badge!",
			inline: true,
		},
	]);

	embed
		.setColor('Aqua')
		.setFooter({ text: 'https://marshy.lol' })
		.setTimestamp()
		.setAuthor({
			name: 'Developed by Marshy',
			url: 'https://github.com/Marshxan',
			iconURL: 'https://cdn.discordapp.com/avatars/931980616344416316/14b8e6ae99d363b60753503ea2afa8ac.webp',
		})
		.setThumbnail(guild.iconURL());

	interaction.reply({
		embeds: [embed],
	});
};

export { create, invoke };
