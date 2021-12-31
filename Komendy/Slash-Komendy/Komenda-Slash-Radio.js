const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const {
    MessageEmbed
} = require("discord.js")
const Discord = require("discord.js")


//const player = voice.createAudioPlayer()


module.exports = {
    data: new SlashCommandBuilder()
        .setName("radio")
        .setDescription("Odpowie Pong"),

    async run(client, interaction, message) {
        const voice = require("@discordjs/voice")
        const currGuild = message.member.guild;
        const VC = message.member.voice.channel;
     
        const resource = voice.createAudioResource('https://live.splex.xyz:8000/radio.mp3');

        const currentguild = await client.guilds.fetch(currGuild.id);
        const connection = voice.joinVoiceChannel({
            channelId: VC.id,
            guildId: currGuild.id,
            adapterCreator: currentguild.voiceAdapterCreator
        });
        const audioplayer = voice.createAudioPlayer();
        connection.subscribe(audioplayer);
        audioplayer.play(resource);
        connection.on('stateChange', (oldState, newState) => {
        //console.log(`Connection transitioned from ${oldState.status} to ${newState.status}`);
        });
        audioplayer.on('stateChange', (oldState, newState) => {
        //console.log(`Audio player transitioned from ${oldState.status} to ${newState.status}`);
        });
        interaction.reply({
            content: 'Im working'
        })
    }
}