const { Client, MessageEmbed, } = require('discord.js')
const chalk = require('chalk')
const client = new Client({ partials: ["MESSAGE", "REACTION"] })


const { token, prefix } = require("./Config/config.js")

const commandHandler = require("./Handlery/command.handler.js")
const settingsHandler = require("./Handlery/settings.handler.js")
const apiHandler = require("./Handlery/api.handler.js")
const eventHandler = require("./Handlery/event.handler.js")
const { guildOnly } = require('./Komendy/Komenda-Usun.js')

const botauthor = '<@622714126841675778>'
const botversion = 'v1.0 beta'
const botname = "Samoyed Bot"



const log = console.log

commandHandler(client)
settingsHandler(client)
apiHandler(client)
eventHandler(client)

const rulesMessageId = "813075657353330718"
const guildRoles = {
  SAMOYED: "770932698554171412",
  PLEC: "813398860705431603",
  PLATFORMA: "813398318893367306",
  GRA: "813397652305346602",
}

client.on('ready', () => {
  console.log(chalk.green(`Zalogowano jako ${client.user.tag}!`))
  const embed = new MessageEmbed()

  .setTitle(botname)
  .setColor(0xb65307)
  .setDescription(`Zostałem poprawnie załadowany.`)
  .addField("Autor", botauthor, true)
  .addField("Wersja", botversion, true)
  client.channels.cache.get("811635924701151302").send(embed);

  client.settings.forEach((config, guildid) =>{
    const { guilds } = client
  })
})
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.partial) await reaction.fetch()

  const { message } = reaction
  //zmienić rulesmessage id 
  if (message.id === rulesMessageId) {
    const member = message.channel.guild.members.cache.get(user.id)

    if (reaction.emoji.name === "👍") {
    member.roles.add(guildRoles.SAMOYED)
    }
 }
})

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.partial) await reaction.fetch()

  const { message } = reaction
  //zmienić rulesmessage id 
  if (message.id === rulesMessageId) {
    const member = message.channel.guild.members.cache.get(user.id)

    if (reaction.emoji.name === "👍") {
    member.roles.remove(guildRoles.SAMOYED)
    }
 }
})
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.partial) await reaction.fetch()

  const { message } = reaction
  //zmienić rulesmessage id 
  if (message.id === rulesMessageId) {
    const member = message.channel.guild.members.cache.get(user.id)

    if (reaction.emoji.name === "👍") {
    member.roles.add(guildRoles.PLEC)
    }
 }
})

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.partial) await reaction.fetch()

  const { message } = reaction
  //zmienić rulesmessage id 
  if (message.id === rulesMessageId) {
    const member = message.channel.guild.members.cache.get(user.id)

    if (reaction.emoji.name === "👍") {
    member.roles.remove(guildRoles.PLEC)
    }
 }
})
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.partial) await reaction.fetch()

  const { message } = reaction
  //zmienić rulesmessage id 
  if (message.id === rulesMessageId) {
    const member = message.channel.guild.members.cache.get(user.id)

    if (reaction.emoji.name === "👍") {
    member.roles.add(guildRoles.GRA)
    }
 }
})

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.partial) await reaction.fetch()

  const { message } = reaction
  //zmienić rulesmessage id 
  if (message.id === rulesMessageId) {
    const member = message.channel.guild.members.cache.get(user.id)

    if (reaction.emoji.name === "👍") {
    member.roles.remove(guildRoles.GRA)
    }
 }
})
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.partial) await reaction.fetch()

  const { message } = reaction
  //zmienić rulesmessage id 
  if (message.id === rulesMessageId) {
    const member = message.channel.guild.members.cache.get(user.id)

    if (reaction.emoji.name === "👍") {
    member.roles.add(guildRoles.PLATFORMA)
    }
 }
})

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.partial) await reaction.fetch()

  const { message } = reaction
  //zmienić rulesmessage id 
  if (message.id === rulesMessageId) {
    const member = message.channel.guild.members.cache.get(user.id)

    if (reaction.emoji.name === "👍") {
    member.roles.remove(guildRoles.PLATFORMA)
    }
 }
})
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "👦"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("813003866916257832")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "👦"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("813003866916257832")
      }
      }
    })
    client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "👧"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("813110297900220446")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "👧"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("813110297900220446")
      }
      }
    })
    client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "🖥️"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("813110301649797130")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "🖥️"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("813110301649797130")
      }
      }
    })
      client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "🎮"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("813110303150702612")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "🎮"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("813110303150702612")
      }
      }
    })
        client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "🕹️"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("813110303855607829")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "🕹️"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("813110303855607829")
      }
      }
    })
        client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "⌨️"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("813110304661176382")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "⌨️"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("813110304661176382")
      }
      }
    })
      client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "🇫"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("813001869491437609")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "🇫"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("813001869491437609")
      }
      }
    })
    client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "🇷"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("813110306019868722")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "🇷"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("813110306019868722")
      }
      }
    })
        client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "🇲"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("812999538754846733")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "🇲"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("812999538754846733")
      }
      }
    })
        client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "🇱"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("813112473980502086")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "🇱"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("813112473980502086")
      }
      }
    })
        client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "🇸"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("813002593274036235")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "🇸"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("813002593274036235")
      }
      }
    })
        client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "🇪"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("813002366302289942")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "🇪"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("813002366302289942")
      }
      }
    })
            client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "🇬"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("813112291847176192")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "🇬"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("813112291847176192")
      }
      }
    })
            client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "🇴"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("813112292875042836")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "🇴"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("813112292875042836")
      }
      }
    })
            client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "🇺"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("813114080511787039")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "🇺"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("813114080511787039")
      }
      }
    })
            client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "🇧"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("813114081396391987")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "🇧"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("813114081396391987")
      }
      }
    })
            client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "🇨"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("813114081871003719")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "🇨"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("813114081871003719")
      }
      }
    })
            client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "776155225890619429") {
    if (reaction.emoji.name === "🇿"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("813114083200466965")
    }
    }
  })
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.channel.id === "776155225890619429") {
      if (reaction.emoji.name === "🇿"){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("813114083200466965")
      }
      }
    })
client.login(token)


client.on("debug", () => {})
client.on("warn", () => {})
client.on("error", () => {})
