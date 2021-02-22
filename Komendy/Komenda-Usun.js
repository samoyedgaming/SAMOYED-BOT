const { Permissions: { FLAGS } } = require("discord.js")


const { MessageEmbed } = require('discord.js')
const botauthor = '<@622714126841675778>'
const botversion = 'v1.0 beta'
const botname = "Samoyed Bot"
module.exports = {
    name: "usun",
    description: "Usuwa daną ilość wiadomości na kanale",
    usage: "<Liczba>",
    guildOnly: true,
    aliases: ["u"],
    userPermissions: [FLAGS.MANAGE_MESSAGES],

    run(msg, args) {
        const { channel, guild, member } = msg
    
        const amount = parseInt(args[0])
    
        if (!Number.isInteger(amount)) {
            const embed = new MessageEmbed()

            .setTitle(botname)
            .setColor(0xb65307)
            .setDescription(`Musisz podać liczbę wiadomości którą chcesz usunąć.`)
            .addField("Autor", botauthor, true)
            .addField("Wersja", botversion, true)
        
          return  channel.send(embed)
        }
    
        if (amount < 2 || amount >= 101) {
            const embed = new MessageEmbed()

            .setTitle(botname)
            .setColor(0xb65307)
            .setDescription(`Liczba usuwanych wiadomości nie może być większa niż 100 ani mniejsza niż 2.`)
            .addField("Autor", botauthor, true)
            .addField("Wersja", botversion, true)

          return  channel.send(embed)
        }
    
        channel.bulkDelete(amount)
        
        const embed = new MessageEmbed()

        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription(`Usunąłem ${amount} wiadomości.`)
        .addField("Autor", botauthor, true)
        .addField("Wersja", botversion, true)
        channel.send(embed)
      },
    }
    