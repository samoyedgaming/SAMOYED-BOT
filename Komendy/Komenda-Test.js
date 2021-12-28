const {
    joinVoiceChannel,
    createAudioResource,
    AudioPlayerStatus,
    createAudioPlayer,
} = require('@discordjs/voice');
const player = createAudioPlayer();
const broadcast = client.voice.createBroadcast();
var voice;
module.exports = {
    name: "r",
    description: "Wyświetla dane bota",
    guildOnly: true,

    async run(message, client, Discord, args) {
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
        player = voice.playArbitraryInput("https://rs102-krk.rmfstream.pl/rmf_maxxx");

        player.on('error', error => {
            console.error(`Error: ${error.message} with resource ${error.resource.metadata.title}`);
            player.play(getNextResource());
        });
    }
}