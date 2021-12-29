const {
  MessageEmbed
} = require("discord.js");
const {
  SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Wyświetla dane bota"),

  async run(client, interaction) {
    const botauthor = "Samoyed Franek#9264";
    const botversion = "v1.0 beta";
    const botname = "Samoyed Bot";
    const botdescription = "Jestem Botem który zastępuje większość botów.";

    const embed = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(botdescription)
      .addField("Autor", botauthor, true)
      .addField("Wersja", botversion, true);

    interaction.reply({
      embeds: [embed],
      ephemeral: true
    });
  },
};