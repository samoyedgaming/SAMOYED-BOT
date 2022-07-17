const fetch = require("node-fetch");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gif")
    .setDescription("Wysyła randomowy GIF!"),
  async run(client, interaction) {
    fetch(`http://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY}&rating=g`)
      .then((res) => res.json())
      .then((body) => {
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("**Losowy GIF**")
        .setTimestamp()
        .setImage(
            body.data.images.original.url
        );
        interaction.reply({
          embeds: [ embed ],
        });
      });
  },
};