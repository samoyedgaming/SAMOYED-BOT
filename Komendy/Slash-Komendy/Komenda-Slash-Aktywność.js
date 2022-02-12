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
            .setName("aktywnosc")
            .setDescription("Aktywuje aktywność")
            .addStringOption(option =>
                option.setName('typ')
                    .setDescription('Wybierasz aktywność')
                    .setRequired(true)
                    .addChoice('YouTube', 'youtube')
                    .addChoice('Poker', 'poker')),
        async run(client, interaction) {
            
            client.discordTogether = new DiscordTogether(client);
            const string = interaction.options.getString('typ');
            console.log(string)
        }
    }