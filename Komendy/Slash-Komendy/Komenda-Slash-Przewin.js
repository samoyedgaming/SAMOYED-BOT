const botauthor = "Samoyed Franek#9264";
const botversion = "v1.0 beta";
const botname = "Samoyed Bot";
const Discord = require('discord.js')
const {
  MessageEmbed
} = require("discord.js");
const {
  SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("przewin")
    .setDescription("Puszcza nastepna piosenke"),
  async run(client, interaction) {
    const embed = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(
        "Musisz dołączyć na kanał głosowy!"
      );
    const embed1 = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(
        "Musisz być na tym samym kanale co ja!"
      );
    const embed2 = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(
        "Znalazłem twoją piosenkę!"
      );
    const embed3 = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(
        "Aktualnie nic nie gram!"
      );
    const {
      DisTube
    } = require("distube")
    const {
      YtDlpPlugin
    } = require("@distube/yt-dlp");
    const distube = new DisTube(client, {
      youtubeDL: false,
      plugins: [new YtDlpPlugin()],
    });
    const queue = distube.getQueue(interaction)
    const voiceChannel = interaction.member.voice.channel
    if (!voiceChannel) {
      return interaction.reply({
        embeds: [embed]
      })
    }
    if (!queue) {
      return interaction.reply({
        embeds: [embed3]
      })
    }
    if (interaction.member.guild.me.voice.channelId !== interaction.member.voice.channelId) {
      return interaction.reply({
        embeds: [embed1]
      })
    }
    try {
      await distube.skip(interaction)
      await interaction.reply("***Pominięto***")
      const message = await interaction.fetchReply()
      await message.react("⏭")
    } catch {
      interaction.reply({
        content: "Nie ma następnej piosenki"
      })
    }
  }
}