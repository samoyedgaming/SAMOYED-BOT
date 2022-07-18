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
        client.channels.cache.get("920985565682360320").messages.fetch("998558394489249834").then(msg => {
            let ifilter = i => !i.user.bot;
            const collector = msg.createMessageComponentCollector({
                filter: ifilter
            })

            collector.on("collect", async i => {
                if (i.customId === "reg") {
                    if (!i.member.roles.cache.has("920985535571435552")) {
                        await i.member.roles.add("920985535571435552")
                    } else {
                        await i.member.roles.remove("920985535571435552")
                    }
                };
                if (i.customId === "reg") {
                    if (!i.member.roles.cache.has("920985538687803442")) {
                        await i.member.roles.add("920985538687803442")
                    } else {
                        await i.member.roles.remove("920985538687803442")
                    }
                };
                if (i.customId === "reg") {
                    if (!i.member.roles.cache.has("920985541355393104")) {
                        await i.member.roles.add("920985541355393104")
                    } else {
                        await i.member.roles.remove("920985541355393104")
                    }
                };
                if (i.customId === "reg") {
                    if (!i.member.roles.cache.has("920985545855885322")) {
                        await i.member.roles.add("920985545855885322")
                        i.reply({
                            content: "Zaakceptowano regulamin",
                            ephemeral: true
                        })
                    } else {
                        await i.member.roles.remove("920985545855885322")
                        i.reply({
                            content: "Anulowano regulamin",
                            ephemeral: true
                        })
                    }
                };
            })
        })
    }
}