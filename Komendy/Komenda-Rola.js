const botauthor = 'Samoyed Franek#9264'
const botversion = 'v1.0 beta'
const botname = "Samoyed Bot"

const { Client, ReactionCollector } = require('discord.js')
const client = new Client({ partials: ["MESSAGE", "REACTION"] })
const { Permissions: { FLAGS }, MessageEmbed } = require("discord.js")

module.exports = {
    name: "rola",
    description: "Wysyła link do serwera",
    usage: " ",
    guildOnly: true,
    aliases: ["l"],

async run(msg, reaction, channel) {
        const embed = new MessageEmbed()
        
        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription("Regulamin")
        .addField("Chłopak", "- 👦")
        .addField("Autor", botauthor, true)
        .addField("Wersja", botversion, true)

        let msgEmbed = await msg.channel.send(embed)
        msgEmbed.react("👦").then(() => msgEmbed.react("👧"))
}}