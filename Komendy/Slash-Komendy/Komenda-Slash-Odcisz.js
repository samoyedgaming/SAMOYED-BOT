const botauthor = "Samoyed Franek#9264";
const botversion = "v1.0 beta";
const botname = "Samoyed Bot";

const {
  MessageEmbed,
} = require("discord.js");
const {
  SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("odcisz")
    .setDescription("Odcisza daną osobę")
    .addUserOption(option => option.setName('użytkownik').setDescription("Wybierasz osobę którą chcesz odciszyć").setRequired(true)),
  async run(client, interaction) {

    const user = interaction.options.getUser("użytkownik")

    let permissions = interaction.member.permissions.has("MODERATE_MEMBERS")
    if (!permissions) return interaction.reply("Nie masz permisji do użycia tej komendy!")

    const member = await interaction.guild.members.fetch(user.id)

    if (!member.isCommunicationDisabled()) return interaction.reply("Ten użytkownik już nie jest wyciszony!")

    await member.timeout(null)

    const embed = new MessageEmbed()
      .setAuthor(`${user.tag} został poprawnie odciszony!`, user.avatarURL())
      .setFooter(interaction.user.tag, interaction.user.displayAvatarURL({
        dynamic: true
      }))
      .setTimestamp()

    interaction.reply({
      embeds: [embed]
    })
  }
}