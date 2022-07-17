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

        client.channels.cache.get("920985572745555969").messages.fetch("998266229775151214").then(msg => {
            let ifilter = i => !i.user.bot;

            const collector = msg.createMessageComponentCollector({
                filter: ifilter
            })

            collector.on("collect", async i => {
                if (i.customId === "ch") {
                    if (!i.member.roles.cache.has("920985539656691722")) {
                        await i.member.roles.add("920985539656691722")
                        i.reply({
                            content: "Otrzymano rolę <@&920985539656691722>",
                            ephemeral: true
                        })
                    } else {
                        await i.member.roles.remove("920985539656691722")
                        i.reply({
                            content: "Usunięto rolę <@&920985539656691722>",
                            ephemeral: true
                        })
                    }
                }
                if (i.customId === "dz") {
                    if (!i.member.roles.cache.has("920985540386521129")) {
                        await i.member.roles.add("920985540386521129")
                        i.reply({
                            content: "Otrzymano rolę <@&920985540386521129>",
                            ephemeral: true
                        })
                    } else {
                        await i.member.roles.remove("920985540386521129")
                        i.reply({
                            content: "Usunięto rolę <@&920985540386521129>",
                            ephemeral: true
                        })
                    }
                }
            })
        })

    }
}