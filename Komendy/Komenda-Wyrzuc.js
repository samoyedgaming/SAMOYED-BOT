const { Permissions: { FLAGS } } = require("discord.js")


const { MessageEmbed } = require('discord.js')
const botauthor = '<@622714126841675778>'
const botversion = 'v1.0 beta'
const botname = "Samoyed Bot"
module.exports = {
    name: "wyrzuc",
    description: "Wyrzuca daną osobe",
    usage: "<osoba> <powod>",
    guildOnly: true,
    aliases: ["w"],
    userPermissions: [FLAGS.KICK_MEMBERS],

    run(msg, args) {
        const { channel, guild, author, mentions } = msg
        
        const reasonArg = [...args].slice(1).join(" ")
        const userToKick =mentions.users.first()

        if (!userToKick) {
            const embed = new MessageEmbed()
        
            .setTitle(botname)
            .setColor(0xb65307)
            .setDescription("Musisz podać jakiego użytkownika chcesz wyrzucić.")
            .addField("Autor", botauthor, true)
            .addField("Wersja", botversion, true)
        
            return channel.send(embed)
        }

        if (userToKick.id === author.id){
            const embed = new MessageEmbed()
        
            .setTitle(botname)
            .setColor(0xb65307)
            .setDescription("Nie możesz wyrzucić samego siebie.")
            .addField("Autor", botauthor, true)
            .addField("Wersja", botversion, true)
        
            return channel.send(embed)
        }
        const memberToKick = guild.members.cache.get(userToKick.id)

        if (!memberToKick.kickable) {
            const embed = new MessageEmbed()
        
            .setTitle(botname)
            .setColor(0xb65307)
            .setDescription("Nie masz wymaganej permisji do używania tej komendy.")
            .addField("Autor", botauthor, true)
            .addField("Wersja", botversion, true)
        
            return channel.send(embed)
        }
        memberToKick.kick(reasonArg).then((res) => {
            const embed = new MessageEmbed()
        
            .setTitle(botname)
            .setColor(0xb65307)
            .setDescription(`Użytkownik \`${res.displayName}\` został wyrzucony. \n${reasonArg ? `\nPowód: ${reasonArg}` : ""}`)
            .addField("Autor", botauthor, true)
            .addField("Wersja", botversion, true)
        
            msg.channel.send(embed)
        }

        )}
}
