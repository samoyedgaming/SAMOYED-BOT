const { createReadStream } = require('fs');
const { join } = require('path');
const { createAudioResource, StreamType, createAudioPlayer, joinVoiceChannel } = require('@discordjs/voice');
const player = createAudioPlayer();

module.exports = {
    name: "radio",
    description: "Tworzy ticket",

    async run(message, client) {

        if(joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(player)) {
            message.reply("Working V@")
        }
        
        let resource = createAudioResource('https://live.splex.xyz:8000/radio.mp3');

        if(player.play(resource)) {
            message.reply("Working")
        }

    }
}