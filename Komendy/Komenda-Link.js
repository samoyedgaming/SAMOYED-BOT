const botauthor = '<@622714126841675778>'
const botversion = 'v1.0 beta'
const botname = "Samoyed Bot"

const { Permissions: { FLAGS }, MessageEmbed } = require("discord.js")

module.exports = {
    name: "link",
    description: "Wysyła link do serwera",
    usage: " ",
    guildOnly: true,
    aliases: ["l"],
    userPermissions: [FLAGS.SEND_MESSAGES],

run(msg) {
        const embed = new MessageEmbed()
        
        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription("LINK NIGDY NIE WYGAŚNIE:   --->  https://dsc.gg/samoyedgaming <--- ZAPRASZAMY WSZYSTKICH! :heart:")
        .addField("Autor", botauthor, true)
        .addField("Wersja", botversion, true)

        msg.channel.send(embed)
    }
}
