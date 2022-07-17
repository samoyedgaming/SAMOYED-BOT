const botauthor = "Samoyed Franek#9264";
const botversion = "v1.0 beta";
const botname = "Samoyed Bot";

const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("emit")
        .setDescription("Emituje dołączenie/opuszczenie serwera")
        .addStringOption((option) =>
            option
                .setName("typ")
                .setDescription("Typ emitera")
                .setRequired(true)
                .addChoices(
                    { name: "Dolacz", value: "dolacz" },
                    { name: "Opusc", value: "opusc" },
                    { name: "Ban", value: "ban" }
                )
        )
        .addUserOption((option) =>
            option.setName("użytkownik").setDescription("ID").setRequired(true)
        ),

    async run(client, interaction) {
        const user = interaction.options.getMember("użytkownik");
        let permissions =
            interaction.member.permissions.has("MODERATE_MEMBERS");
        if (!permissions)
            return interaction.reply(
                "Nie masz permisji do użycia tej komendy!"
            );

        const value = interaction.options.getString("typ");

        if (value === "dolacz") {
            client.emit("guildMemberAdd", user);
            interaction.reply({ content: "Udało się!", ephemeral: true });
        }
        if (value === "opusc") {
            client.emit("guildMemberRemove", user);
            interaction.reply({ content: "Udało się!", ephemeral: true });
        }

        if (value === "ban") {
            client.emit("guildMemberBan", user);
            interaction.reply({ content: "Udało się!", ephemeral: true });
        }
    },
};
