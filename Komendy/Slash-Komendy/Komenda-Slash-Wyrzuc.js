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
    .setName("wyrzuc")
    .setDescription("Wyrzuca daną osobę z serwera")
    .addUserOption(option => option.setName('użytkownik').setDescription("Wybierasz osobę którą chcesz wyciszyć.").setRequired(true))
    .addStringOption(option => option.setName("powód").setDescription("Podajesz powód wyciszenia").setRequired(true)),
  async run(client, interaction) {

    const powod = interaction.options.getString("powód")
    const user = interaction.options.getUser("użytkownik")

    let permissions = interaction.member.permissions.has("MODERATE_MEMBERS")
    if (!permissions) return interaction.reply("Nie masz permisji do użycia tej komendy!")

    const member = await interaction.guild.members.fetch(user.id)

    const embed = new MessageEmbed()
      .setAuthor(`${user.tag} został poprawnie wyrzucony!`, user.avatarURL())
      .setDescription(`**Powód: **${powod}`)
      .setFooter(interaction.user.tag, interaction.user.displayAvatarURL({
        dynamic: true
      }))
      .setTimestamp()

    if (member.kick()) return interaction.reply({
      embeds: [embed]
    })
  }
}