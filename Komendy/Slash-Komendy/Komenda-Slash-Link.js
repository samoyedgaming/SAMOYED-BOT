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
    .setName("link")
    .setDescription("Wysyła link do serwera"),

  async run(client, interaction, msg) {
    const embed = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(
        "LINK NIGDY NIE WYGAŚNIE:   --->  https://samoyedgaming.ga <--- ZAPRASZAMY WSZYSTKICH! :heart:"
      );
    interaction.reply({
      embeds: [embed],
      ephemeral: true
    });
  },
};