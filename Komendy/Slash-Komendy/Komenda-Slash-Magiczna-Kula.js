const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("magiczna-kula")
        .setDescription(
            "Zadaj pytanie z odpowiedzią tak/nie żeby dostać odpowiedź!"
        )
        .addStringOption((option) =>
            option
                .setName("pytanie")
                .setDescription("Tylko pytania tak/nie!")
                .setRequired(true)
        ),

    async run(client, interaction) {
        var answers = [
            "To pewne.",
            "Zdecydowanie tak.",
            "Bez wątpienia.",
            "Tak - zdecydowanie.",
            "Możesz na tym polegać.",
            "Jak ja to widzę, tak.",
            "Najprawdopodobniej tak.",
            "TAK!",
            "Znaki wskazujące że tak.",
            "Odpowiedź jest zamazana, spróbuj ponownie.",
            "Zapytaj ponownie później.",
            "Lepiej ci teraz tego nie mówić.",
            "Nie mogę teraz przewidzieć.",
            "Skoncentruj się i zapytaj ponownie.",
            "Nie licz na to.",
            "Moja odpowiedź brzmi nie.",
            "Według moich źródeł, nie.",
            "Bardzo wątpliwe.",
        ];
        var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("**Legendarna magiczna kula**")
        .setDescription('`' + `Kula ma do powiedzenia ci coś ważnego...` + '`')
        .addFields(
            { name: "Twoje pytanie", value: '`' + interaction.options.getString("pytanie") + '`' },
            { name: "Odpowiedź Magicznej kuli", value: '`' + randomAnswer + '`' }
        )
        .setTimestamp();
        await interaction.deferReply();
        await wait(1500);
        await interaction.editReply({
            embeds: [embed],
        });
    },
};
