const {
  SlashCommandBuilder
} = require('@discordjs/builders');
const {
  MessageEmbed
} = require("discord.js")
const Discord = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ile-mam-iq")
    .setDescription("Wyświetla ile masz iq"),

  async run(client, interaction, msg) {
    const random = Math.floor(Math.random() * 501);

    const botauthor = "Samoyed Franek#9264";
    const botversion = "v1.0 beta";
    const botname = "Samoyed Bot";
    const botdescription = "Jestem Botem który zastępuje większość botów.";

    const embed = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(`Masz ${random} IQ`);


      interaction.reply({
        embeds: [embed],
        ephemeral: true
    })
  },
};