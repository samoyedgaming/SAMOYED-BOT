const { Collection, MessageEmbed } = require("discord.js")

const { readdirSync } = require("fs")

const { prefix, owner } = require(__dirname + "/../Config/config.js")

const ascil = require("ascii-table")
const { cooldown } = require("../Komendy/Komenda-Usun.js")

const table = new ascil().setHeading("Komenda", "Status")

const botauthor = '<@622714126841675778>'

const botversion = 'v1.0 beta'

const botname = "Samoyed Bot"

module.exports = (client) => {



   client.commands = new Collection()

   const cooldowns = new Collection()
   
    const commandfiles = readdirSync(__dirname + "/../Komendy").filter(file => file.startsWith("Komenda-"),
    )

    for (const file of commandfiles) {
        const command = require(__dirname + `/../Komendy/${file}`)

        if (command.name) {
            client.commands.set(command.name, command)
            table.addRow(file, "✅")
        } else {
            table.addRow(file, "❌  -> Brakująca 'Nazwa'!")
            continue
        }
    }
    console.log(table.toString())

    client.on('message', async (msg) => {
        const { author, guild, channel } = msg


      // Sprawdza czy to bot czy człowiek i czy pisze na dm czy na serwie
        if (author.bot) {
          return
        }  
      // Ignoruje wiadomości bez prefixu
        if (!msg.content.startsWith(prefix)) return
      
        const args = msg.content.slice(prefix.length).trim().split(/ +/g)
      
        const cmdName = args.shift().toLowerCase()

        const cmd = client.commands.get(cmdName) || 
        client.commands.find(
        cmd => cmd.aliases && cmd.aliases.includes(cmdName))
        if (!cmd) return


        if (cmd.guildOnly && !guild) {

            const embed = new MessageEmbed()
            .setTitle(botname)
            .setColor(0xb65307)
            .setDescription(`Nie można używać komend na DM.`)
            .addField("Autor", botauthor, true)
            .addField("Wersja", botversion, true)

        return channel.send(embed)
        }



        //Sprawdza permisje
        if (cmd.userPermissions && cmd.userPermissions.length) {
          if (!msg.member.permissionsIn(channel).has(cmd.userPermissions)) {
            const embed = new MessageEmbed()
            .setTitle(botname)
            .setColor(0xb65307)
            .setDescription(`Nie masz wymaganej permisji do używania tej komendy`)
            .addField("Autor", botauthor, true)
            .addField("Wersja", botversion, true)
        
        return channel.send(embed)
          }
        }

        if (cmd.args && !args.lenght) {
            const embed = new MessageEmbed()
            .setTitle(botname).setColor(0xb65307).setDescription(`Nie podałeś argumentu. Poprawne użycie komendy: ${prefix}${cmdName} ${cmd.usage}.`, false).addField("Autor", botauthor, true).addField("Wersja", botversion, true)
                
                return channel.send(embed)
            }
            // Cool down
    if (!cooldowns.has(cmdName)) { 
      cooldowns.set(cmdName, new Collection())
    }

    const now = Date.now()
    const timestamps = cooldowns.get(cmdName)
    const cooldownAmount = (cmd.cooldown || 3) * 1000

    if (timestamps.has(msg.author.id)) {
      const expirationTime = timestamps.get(msg.author.id) + cooldownAmount

      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000
        const embed = new MessageEmbed()
            .setTitle(botname)
            .setColor(0xb65307)
            .setDescription(`Proszę czekać ${timeLeft.toFixed(0,)} sekund zanim użyjesz komendy \`${prefix}${cmdName}\` ponownie.`)
            .addField("Autor", botauthor, true)
            .addField("Wersja", botversion, true)
        
        return channel.send(embed)
      }
    }

    timestamps.set(msg.author.id, now)
    setTimeout(() => timestamps.delete(msg.author.id), cooldownAmount)
        try {
          cmd.run(msg, args)
        } catch (error) {
          console.log(error)

        const embed = new MessageEmbed()
            .setTitle(botname)
            .setColor(0xb65307)
            .setDescription(`Wystąpił problem spróbuj ponownie póżniej.`)
            .addField("Autor", botauthor, true)
            .addField("Wersja", botversion, true)
        
        channel.send(embed)
        }
      })
      
}