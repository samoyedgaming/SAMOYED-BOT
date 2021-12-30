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
    .setName("odrzucone")
    .setDescription("Odrzuca podanie")
    .addUserOption(option => option.setName('użytkownik').setDescription("Wybierasz osobę").setRequired(true)),
  async run(client, interaction) {

    const user = interaction.options.getUser("użytkownik")

    let permissions = interaction.member.permissions.has("MODERATE_MEMBERS")
    if (!permissions) return interaction.reply("Nie masz permisji do użycia tej komendy!")

    const member = await interaction.guild.members.fetch(user.id)

    const embed = new MessageEmbed()
      .setImage("https://cdn.discordapp.com/attachments/734117810220826654/785141876088897546/podanieodrzucone.png.24d0ce6e606af4060e5695d248f9d3b8.png")

    interaction.reply({
      content: "Poprawnie wysłano wiadomość"
    })
    member.guild.channels.cache.get("922834801008979968").send({
      content: `<@${member.user.id}>`,
      embeds: [embed]
    })
  }
}