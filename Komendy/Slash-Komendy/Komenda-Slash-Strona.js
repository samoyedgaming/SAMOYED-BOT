const botauthor = "Samoyed Franek#9264";
const botversion = "v1.0 beta";
const botname = "Samoyed Bot";

const {
  Permissions: {
    FLAGS
  },
  MessageEmbed,
} = require("discord.js");
const {
  SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("strona")
    .setDescription("Wysyła strone serwera"),

    async run(client, interaction) {
    const embed = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(
        "Moja własna strona internetowa: https://franek.ga."
      );

    interaction.reply({
      embeds: [embed],
      ephemeral: true
    });
  },
};