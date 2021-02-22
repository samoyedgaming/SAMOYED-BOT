const botauthor = '<@622714126841675778>'
const botversion = 'v1.0 beta'
const botname = "Samoyed Bot"

const { Permissions: { FLAGS }, MessageEmbed } = require("discord.js")

module.exports = {
    name: "strona",
    description: "Wysyła strone serwera",
    usage: " ",
    guildOnly: true,
    aliases: [""],
    userPermissions: [FLAGS.SEND_MESSAGES],

run(msg) {
        const embed = new MessageEmbed()
        
        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription("Moja własna strona internetowa: https://samoyedfranek.github.io/site/home.html.")
        .addField("Autor", botauthor, true)
        .addField("Wersja", botversion, true)

        msg.channel.send(embed)
    }
}
