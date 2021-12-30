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
const ms = require("ms")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("wycisz")
    .setDescription("Wycisza daną osobę")
    .addUserOption(option => option.setName('użytkownik').setDescription("Wybierasz osobę którą chcesz wyciszyć.").setRequired(true))
    .addStringOption(option => option.setName("czas").setDescription("Podajesz na ile czasu chcesz wyciszyć danego użytkownika").setRequired(true))
    .addStringOption(option => option.setName("powód").setDescription("Podajesz powód wyciszenia").setRequired(true)),
  async run(client, interaction) {

    const user = interaction.options.getUser("użytkownik")
    const czas = interaction.options.getString("czas")
    const powod = interaction.options.getString("powód")

    let permissions = interaction.member.permissions.has("MODERATE_MEMBERS")
    if (!permissions) return interaction.reply("Nie masz permisji do użycia tej komendy!")

    const member = await interaction.guild.members.fetch(user.id)

    if (member.isCommunicationDisabled()) return interaction.reply("Ten użytkownik już jest wyciszony!")

    const time = ms(czas)

    await member.timeout(time, powod)

    const embed = new MessageEmbed()
      .setAuthor(`${user.tag} został poprawnie wyciszony!`, user.avatarURL())
      .setDescription(`**Czas: **${czas}\n **Powód: **${powod}`)
      .setFooter(interaction.user.tag, interaction.user.displayAvatarURL({
        dynamic: true
      }))
      .setTimestamp()

    interaction.reply({
      embeds: [embed]
    })
  }
}