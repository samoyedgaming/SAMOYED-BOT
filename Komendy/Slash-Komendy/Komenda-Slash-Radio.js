const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const {
    MessageEmbed
} = require("discord.js")
const Discord = require("discord.js")
const voice = require("@discordjs/voice")

const player = voice.createAudioPlayer()
const resource = voice.createAudioResource("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("radio")
        .setDescription("Odpowie Pong"),

    async run(client, interaction) {
        const connection = voice.joinVoiceChannel({
            channelId: interaction.member.voice.channel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator,
          })
          
          player.play(resource)
          connection.subscribe(player)
        interaction.reply({
            content: `Wyemitowałem dołączenie na serwer`,
            ephemeral: true
        })
    }
}