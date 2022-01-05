const {
  MessageEmbed
} = require("discord.js");
const {
  SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require("discord.js")
const snipe = require("../../Schematy/snipeSchema.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("zamknij-kanal")
    .setDescription("Zamyka kanał"),

  async run(client, interaction) {
    let permissions = interaction.member.permissions.has("MODERATE_MEMBERS")
    if (!permissions) return interaction.reply("Nie masz permisji do użycia tej komendy!")

    interaction.reply({
      content: `<@${interaction.user.id}>, zamknął kanał`,
    }).then(s => {{
        setTimeout(function () {
          interaction.channel.delete()
        }, 5000);
      }
    })
  },
};