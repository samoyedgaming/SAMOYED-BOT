const botauthor = '<@622714126841675778>'
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
        .setDescription("Wybierz Płeć.")
        .addField("Chłopak", "- 👦")
        .addField("Dziewczyna", "- 👧")
        .addField("Autor", botauthor, true)
        .addField("Wersja", botversion, true)

        let msgEmbed = await msg.channel.send(embed)
        msgEmbed.react("👦").then(() => msgEmbed.react("👧"))

        const embed1 = new MessageEmbed()
        
        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription("Wybierz Platformę.")
        .addField("Pc", "- 🖥️")
        .addField("PlayStation", "- 🎮")
        .addField("Xbox", "- 🕹️")
        .addField("Nintendo", "- ⌨️")
        .addField("Autor", botauthor, true)
        .addField("Wersja", botversion, true)

        let msgEmbed1 = await msg.channel.send(embed1)
        msgEmbed1.react("🖥️")
        .then(() => msgEmbed1.react("🎮")
        .then(() => msgEmbed1.react("🕹️")
        .then(() => msgEmbed1.react("⌨️"))))

        const embed2 = new MessageEmbed()
        
        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription("Wybierz Gry")
        .addField("Fortnite", "- :regional_indicator_f:")
        .addField("Roblox", "- :regional_indicator_r:")
        .addField("Minecraft", "- :regional_indicator_m:")
        .addField("Rocket Leauge", "- :regional_indicator_l:")
        .addField("Farming Simulator 19/17", "- :regional_indicator_s:")
        .addField("Euro Truck Simulator 2", "- :regional_indicator_e:")
        .addField("Grand Theft Auto 5", "- :regional_indicator_g:")
        .addField("Leauge Of Legends", "- :regional_indicator_o:")
        .addField("Osu!", "- :regional_indicator_u:")
        .addField("Rayman", "- :regional_indicator_b:")
        .addField("Lego", "- :regional_indicator_c:")
        .addField("Counter Strike", "- :regional_indicator_z:")
        .addField("Autor", botauthor, true)
        .addField("Wersja", botversion, true)

        let msgEmbed2 = await msg.channel.send(embed2)
        msgEmbed2.react("🇫")
        .then(() => msgEmbed2.react('🇷'))
        .then(() => msgEmbed2.react('🇲'))
        .then(() => msgEmbed2.react('🇱'))
        .then(() => msgEmbed2.react('🇸'))
        .then(() => msgEmbed2.react('🇪'))
        .then(() => msgEmbed2.react('🇬'))
        .then(() => msgEmbed2.react('🇴'))
        .then(() => msgEmbed2.react('🇺'))
        .then(() => msgEmbed2.react('🇧'))
        .then(() => msgEmbed2.react('🇨'))
        .then(() => msgEmbed2.react('🇿'))
        
}
}
