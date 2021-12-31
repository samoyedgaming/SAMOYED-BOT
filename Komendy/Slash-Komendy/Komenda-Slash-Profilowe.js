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
    .setName("profilowe")
    .setDescription("Wyświetla zdjęcie profilowe użytkownika")
    .addUserOption(option => option.setName('użytkownik').setDescription("Wybierasz osobę").setRequired(true)),
  async run(client, interaction) {

    const user = interaction.options.getUser("użytkownik")

    let permissions = interaction.member.permissions.has("MODERATE_MEMBERS")
    if (!permissions) return interaction.reply("Nie masz permisji do użycia tej komendy!")

    const member = await interaction.guild.members.fetch(user.id)

    const embed = new MessageEmbed()
      .setTitle(`Avatar użytkownika:\n ${member.user.tag}`)
      .setImage(member.user.displayAvatarURL({ size: 1024, dynamic: true }))
      .setColor("RANDOM")
      .setTimestamp()

    interaction.reply({
      embeds: [embed]
    })
  }
}