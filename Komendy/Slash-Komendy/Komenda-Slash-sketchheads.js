const botauthor = "Samoyed Franek#9264";
const botversion = "v1.0 beta";
const botname = "Samoyed Bot";
const {
    DiscordTogether
} = require('discord-together');
const {
    MessageEmbed,
} = require("discord.js");
const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require("discord.js")
module.exports = {
    data: new SlashCommandBuilder()
        .setName("sketchheads")
        .setDescription("Aktywuje aktywność sketchheads"),
        async run(client, interaction) {
            const { DiscordTogether } = require('discord-together');
            client.discordTogether = new DiscordTogether(client);
            if (!interaction.member.voice.channel) {
                interaction.reply("Musisz być na kanale głosowym aby użyć tej komendy!")
            } else {
            client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'sketchheads').then(async invite => {
                return interaction.reply(`[Kliknij aby włączyć aktywność sketchheads](${invite.code})`);
            });
        }
    }
    }