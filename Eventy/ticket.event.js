const {
    Client,
    Intents,
    MessageEmbed,
    Collection,
    MessageAttachment,
    MessageActionRow,
    MessageButton
} = require("discord.js");
module.exports = {
    name: "ready",

    run(client, msg) {
        client.on("interactionCreate", async (interaction) => {
            if (interaction.isButton()) {
                if (interaction.customId === "ticket") {
                    const everyone = interaction.guild.roles.cache.find(r => r.id === "922834801008979968")
                    if (!interaction.client.channels.cache.find(c => c.name === `ticket-${interaction.user.id}`)) {
                        interaction.guild.channels.create(`ticket-${interaction.user.id}`, {
                            type: "text",
                            parent: "926160870550171670",
                            permissionOverwrittes: [{
                                    id: interaction.user.id,
                                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                },
                                {
                                    id: everyone,
                                    deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                }
                            ]
                        }).then(c => {
                            var channel1 = interaction.guild.channels.cache.find(
                                (channel) => channel.name === `ticket-${interaction.user.id}`
                            );
                            const third = new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                    .setCustomId('close')
                                    .setEmoji("❌")
                                    .setStyle('DANGER'),
                                )
                            const embed = new MessageEmbed()
                                .setTitle(`Ticket został stworzony przez:\n ${interaction.user.username}`)
                                .setDescription(`Proszę opisać swój problem w innym przypadku użytkownik zostanie wyciszony na 1 dzień`)
                                .setColor("RANDOM")

                            c.send({
                                content: "@everyone",
                                embeds: [embed],
                                components: [third]
                            })
                            interaction.reply({
                                content: `<@${interaction.user.id}>, pomyślnie utworzono ticket\n <#${channel1.id}>`,
                                ephemeral: true
                            })

                        })
                    } else {
                        interaction.reply({
                            content: `<@${interaction.user.id}>, masz już aktywny ticket!\n <#${channel1.id}>`,
                            ephemeral: true
                        })
                    }
                }
            }
            if (!interaction.isCommand()) return;

            const slashcmds = client.slashcommands.get(interaction.commandName)

            if (!slashcmds) return;

            try {
                await slashcmds.run(client, interaction)
            } catch (e) {
                console.error(e)
            }
            client.on("interactionCreate", async (interaction) => {
                if (interaction.isButton()) {
                    if (interaction.customId === "close") {
                        interaction.reply({
                            content: `<@${interaction.user.id}>, zamknął ticket`,
                        }).then(s => {
                            {
                                setTimeout(function () {
                                    interaction.channel.delete()
                                }, 5000);
                            }
                        })
                    }
                }
            });
        })
    }
}