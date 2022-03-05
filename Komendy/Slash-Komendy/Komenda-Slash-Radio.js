const {
    SlashCommandBuilder
  } = require('@discordjs/builders');
  const {
    MessageEmbed
  } = require("discord.js")
  const Discord = require("discord.js")
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("radio")
      .setDescription("Odpala radio"),
  
    async run(client, interaction, msg) {
        const { joinVoiceChannel, createAudioPlayer, VoiceConnectionStatus, getVoiceConnection, createAudioResource, entersState, AudioPlayerStatus } = require('@discordjs/voice');

        const channel = interaction.member.voice.channel;
        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });

        const audioPlayer = createAudioPlayer();

        const resource = createAudioResource("https://rs101-krk-cyfronet.rmfstream.pl/rmf_maxxx");

        connection.subscribe(audioPlayer);
        audioPlayer.play(resource); 

        interaction.reply({
          content: "Pomyślnie dołączyłem do kanału",
          ephemeral: true
      })
    },
  };