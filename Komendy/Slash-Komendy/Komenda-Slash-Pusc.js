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
    .setName("pusc")
    .setDescription("Puszcza twoja piosenke")
    .addStringOption(option => option.setName("tytul").setDescription("Tytuł piosenki").setRequired(true)),
  async run(client, interaction) {
    const embed = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(
        "Musisz dołączyć na kanał głosowy!"
      )
      .addField("Autor", botauthor, true)
      .addField("Wersja", botversion, true);
    const embed1 = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(
        "Musisz być na tym samym kanale co ja!"
      )
      .addField("Autor", botauthor, true)
      .addField("Wersja", botversion, true);
    const embed2 = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(
        "Znalazłem twoją piosenkę!"
      )
      .addField("Autor", botauthor, true)
      .addField("Wersja", botversion, true);

    const music = interaction.options.getString("tytul")
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
    const voiceChannel = interaction.member.voice.channel
    const queue = await distube.getQueue(interaction)
    if (!voiceChannel) {
      return interaction.reply({
        embeds: [embed],
        ephemeral: true
      })
    }
    if (queue) {
      if (interaction.member.guild.me.voice.channelId !== interaction.member.voice.channelId) {
        return interaction.reply({
          embeds: [embed1],
          ephemeral: true
        })
      }
    }
    await interaction.reply({embeds: [embed2]})
    distube.play(voiceChannel, music, {
      textChannel: interaction.channel,
      member: interaction.member
    })
  }
}