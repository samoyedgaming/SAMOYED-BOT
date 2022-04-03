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
        client.channels.cache.get("920985572745555969").messages.fetch("960174128294428712").then(msg => {
            let ifilter = i => !i.user.bot;

            const collector = msg.createMessageComponentCollector({
                filter: ifilter
            })

            collector.on("collect", async i => {
                if (i.customId === "pc") {
                    if (!i.member.roles.cache.has("920985542106161162")) {
                        await i.member.roles.add("920985542106161162")
                        i.reply({
                            content: "Otrzymano rolę <@&920985542106161162>",
                            ephemeral: true
                        })
                    } else {
                        await i.member.roles.remove("920985542106161162")
                        i.reply({
                            content: "Usunięto rolę <@&920985542106161162>",
                            ephemeral: true
                        })
                    }
                }
                if (i.customId === "ps") {
                    if (!i.member.roles.cache.has("920985542643023903")) {
                        await i.member.roles.add("920985542643023903")
                        i.reply({
                            content: "Otrzymano rolę <@&920985542643023903>",
                            ephemeral: true
                        })
                    } else {
                        await i.member.roles.remove("920985542643023903")
                        i.reply({
                            content: "Usunięto rolę <@&920985542643023903>",
                            ephemeral: true
                        })
                    }
                }
                if (i.customId === "xb") {
                    if (!i.member.roles.cache.has("920985543750344734")) {
                        await i.member.roles.add("920985543750344734")
                        i.reply({
                            content: "Otrzymano rolę <@&920985543750344734>",
                            ephemeral: true
                        })
                    } else {
                        await i.member.roles.remove("920985543750344734")
                        i.reply({
                            content: "Usunięto rolę <@&920985543750344734>",
                            ephemeral: true
                        })
                    }
                }
                if (i.customId === "n") {
                    if (!i.member.roles.cache.has("920985544811483166")) {
                        await i.member.roles.add("920985544811483166")
                        i.reply({
                            content: "Otrzymano rolę <@&920985544811483166>",
                            ephemeral: true
                        })
                    } else {
                        await i.member.roles.remove("920985544811483166")
                        i.reply({
                            content: "Usunięto rolę <@&920985544811483166>",
                            ephemeral: true
                        })
                    }
                }
            })
        })

    }
}