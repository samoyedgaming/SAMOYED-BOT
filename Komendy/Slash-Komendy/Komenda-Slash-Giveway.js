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
        .setName("giveway")
        .setDescription("Aktywuje aktywność")
        .addSubcommand(subcommand =>
            subcommand
            .setName('reroll')
            .setDescription('Losuje jeszcze raz zwycięzców')
            .addStringOption(option => option.setName('it').setDescription('Id wiadomości').setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
            .setName('start')
            .setDescription('Startuje giveway')
            .addStringOption(option => option.setName('czas').setDescription('Czas losowania 60000 = 60 sekund').setRequired(true))
            .addIntegerOption(option => option.setName('wygrani').setDescription('Ilość wygranych').setRequired(true))
            .addStringOption(option => option.setName('nagroda').setDescription('Co do wygrania').setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
            .setName('koniec')
            .setDescription('Kończy giveway')
            .addStringOption(option => option.setName('id').setDescription('Id wiadomości').setRequired(true))),
    async run(client, interaction) {
        interaction.reply({
            content: 'Udało Się',
            ephemeral: true
        })
    }
}