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
        .setDescription("Aktywuje wybraną aktywność")
        .addStringOption(option =>
            option.setName('nazwa')
            .setDescription('Nazwa aktywności')
            .setRequired(true)
            .addChoices(
                { name: "Youtube", value: "youtube" },
                { name: "Sketchheads", value: "sketchheads" },
                { name: "Wordsnack", value: "wordsnack" }
            )
    ),
    async run(client, interaction) {
        const embed = new MessageEmbed()

            .setTitle("Samoyed Bot")
            .setColor(0xb65307)
            .setDescription(`Musisz być na kanale głosowym aby użyć tej komendy!`);
        const value = interaction.options.getString("nazwa")
        if (value === "youtube") {
            const {
                DiscordTogether
            } = require('discord-together');
            client.discordTogether = new DiscordTogether(client);
            if (!interaction.member.voice.channel) {
                interaction.reply({
                    embeds: [embed]
                })
            } else {
                client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'youtube').then(async invite => {
                    return interaction.reply(`[Kliknij aby włączyć aktywność youtube](${invite.code})`);
                });
            }
        } else {
            if (value === "betrayal") {
                const {
                    DiscordTogether
                } = require('discord-together');
                client.discordTogether = new DiscordTogether(client);
                if (!interaction.member.voice.channel) {
                    interaction.reply({
                        embeds: [embed]
                    })
                } else {
                    client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'betrayal').then(async invite => {
                        return interaction.reply(`[Kliknij aby włączyć aktywność betrayal](${invite.code})`);
                    });
                }
            } else {
                if (value === "fishing") {
                    const {
                        DiscordTogether
                    } = require('discord-together');
                    client.discordTogether = new DiscordTogether(client);
                    if (!interaction.member.voice.channel) {
                        interaction.reply({
                            embeds: [embed]
                        })
                    } else {
                        client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'fishing').then(async invite => {
                            return interaction.reply(`[Kliknij aby włączyć aktywność fishing](${invite.code})`);
                        });
                    }
                } else {
                    if (value === "Sketchheads") {
                        const {
                            DiscordTogether
                        } = require('discord-together');
                        client.discordTogether = new DiscordTogether(client);
                        if (!interaction.member.voice.channel) {
                            interaction.reply({
                                embeds: [embed]
                            })
                        } else {
                            client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'sketchheads').then(async invite => {
                                return interaction.reply(`[Kliknij aby włączyć aktywność sketchheads](${invite.code})`);
                            });
                        }
                    } else {
                        if (value === "wordsnack") {
                            const {
                                DiscordTogether
                            } = require('discord-together');
                            client.discordTogether = new DiscordTogether(client);
                            if (!interaction.member.voice.channel) {
                                interaction.reply({
                                    embeds: [embed]
                                })
                            } else {
                                client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'wordsnack').then(async invite => {
                                    return interaction.reply(`[Kliknij aby włączyć aktywność wordsnack](${invite.code})`);
                                });
                            }
                        }
                    }
                }
            }
        }
    }
}