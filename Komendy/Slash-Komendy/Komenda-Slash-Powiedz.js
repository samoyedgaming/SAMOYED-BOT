const { Util } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("powiedz")
    .setDescription("Maszyna kopiująca!")
    .addStringOption((option) =>
      option
        .setName("slowo")
        .setDescription("Wpisz słowo które ma powiedzieć bot!")
        .setRequired(true)
    ),
  async run(client, interaction) {
    interaction.reply(
      Util.cleanContent(interaction.options.getString("slowo"), interaction)
    );
  },
};