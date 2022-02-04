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
const status = (queue) => `Głośność: \`${queue.volume}%\` | Pętla: \`${queue.repeatMode ? queue.repeatMode === 2 ? "Cała kolejka" : "Ta piosenka" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\` | Filtr: \`${queue.filters.join(", ") || "Off"}\``
module.exports = {
  data: new SlashCommandBuilder()
    .setName("teraz-gramy")
    .setDescription("Wyświetla co aktualnie puszczam - Still in development"),
  async run(client, interaction) {
    const embed = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(
        "Musisz dołączyć na kanał głosowy! - Still in development"
      )
      .addField("Autor", botauthor, true)
      .addField("Wersja", botversion, true);
    const embed1 = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(
        "Musisz być na tym samym kanale co ja! - Still in development"
      )
      .addField("Autor", botauthor, true)
      .addField("Wersja", botversion, true);
    const embed2 = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(
        "Aktualnie nic nie gram! - Still in development"
      )
      .addField("Autor", botauthor, true)
      .addField("Wersja", botversion, true);

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
        return interaction.reply({ embeds: [embed] })
    }
    if (interaction.member.guild.me.voice.channelId !== interaction.member.voice.channelId) {
        return interaction.reply({ embeds: [embed1] })
    }
    if (!queue) {
      return interaction.reply({ embeds: [embed2] })
    } else {
    const song = queue.songs[0]
    const embed4 = new Discord.MessageEmbed()
        .setAuthor({ name: "Teraz gramy", iconURL: "https://raw.githubusercontent.com/HELLSNAKES/Music-Slash-Bot/main/assets/music.gif" })
        .setDescription(`[${song.name}](${song.url})`)
        .addField("**Wyświetlenia:**", song.views.toString(), true)
        .addField("**Polubienia:**", song.likes.toString(), true)
        .addField("**Długość:**", `${queue.formattedCurrentTime} / ${song.formattedDuration}`)
        .addField("**Link**", `[Download This Song](${song.streamURL})`)
        .addField("**Status**", status(queue).toString())
        .setThumbnail(song.thumbnail)
        .setColor("RANDOM")
        .setFooter({ text: `Zarzucona przez: ${song.user.username}`, iconURL: song.user.avatarURL() })
        .setTimestamp()
    interaction.reply({ embeds: [embed4] })
    }
  }
}