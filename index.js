const fs = require('fs')
const {
  Client,
  Intents,
  MessageEmbed,
  Collection,
  MessageAttachment,
  MessageActionRow,
  MessageButton
} = require("discord.js");
const mongoose = require('mongoose')
const Canvas = require("canvas");
const chalk = require("chalk");
const client = new Client({
  partials: ["MESSAGE", "REACTION"],
  intents: Object.keys(Intents.FLAGS)
});
const {
  token,
  prefix,
  mongoDB
} = require("./Config/config.js")

const commandHandler = require("./Handlery/command.handler.js")
const settingsHandler = require("./Handlery/settings.handler.js")
const apiHandler = require("./Handlery/api.handler.js")
const eventHandler = require("./Handlery/event.handler.js")
const {
  guildOnly
} = require("./Komendy/Slash-Komendy/Komenda-Slash-Usun.js");
const {
  DiscordAPIError
} = require("@discordjs/rest");
const INTERACTION_CREATE = require('discord.js/src/client/websocket/handlers/INTERACTION_CREATE');

const botname = "Samoyed Bot"

const log = console.log

commandHandler(client)
settingsHandler(client)
apiHandler(client)
eventHandler(client)

const rulesMessageId = "920987139120967712"

const guildRoles = {
  SAMOYED: "920985535571435552",
  PLEC: "920985538687803442",
  PLATFORMA: "920985541355393104",
  GRA: "9209855458558853222",
  CH: "920985539656691722",
  DZ: "920985540386521129",
  PC: "920985542106161162",
  PS: "920985542643023903",
  XB: "920985543750344734",
  N: "920985544811483166",
  F: "920985546724081704",
  R: "920985547474890782",
  M: "920985548238233620",
  RL: "920985549014175744",
  GTA: "920985549509111879",
  SC: "924378347562237952",
  CS: "920985551442681867",
};

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Polączono z serwerem MongoDB")
}).catch(() => {
  console.log("Wykryto błąd przy łączeniu z serwerem MongoDB")
})
client.slashcommands = new Collection();
const slashcommandsFiles = fs.readdirSync(`./Komendy/Slash-Komendy`).filter(file => file.startsWith("Komenda-Slash"))

for (const file of slashcommandsFiles) {
  const slash = require(`./Komendy/Slash-Komendy/${file}`)
  client.slashcommands.set(slash.data.name, slash)
}

client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    if (interaction.customId === "ticket") {
      const everyone = interaction.guild.roles.cache.find(r => r.id === "922834801008979968")
      if (!interaction.client.channels.cache.find(c => c.name === `ticket-${interaction.user.id}`)) {
        interaction.guild.channels.create(`ticket-${interaction.user.id}`, {
          type: "GUILD_TEXT",
          parent: "926160870550171670",
          permissionsOverwrites: [{
              id: interaction.user.id,
              allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
            },
            {
              id: 920985535571435552,
              deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
            }
          ]
        }).then(c => {
          var channel1 = interaction.guild.channels.cache.find(
            (channel) => channel.name === `ticket-${interaction.user.id}`
          );
          const third = new MessageActionRow()
            .addComponents(
              new MessageButton()
              .setCustomId('close')
              .setEmoji("❌")
              .setStyle('DANGER'),
            )
          const embed = new MessageEmbed()
            .setTitle(`Ticket został stworzony przez:\n ${interaction.user.username}`)
            .setDescription(`Proszę opisać swój problem w innym przypadku użytkownik zostanie wyciszony na 1 dzień`)
            .setColor("RANDOM")

          c.send({
            content: "@everyone",
            embeds: [embed],
            components: [third]
          })
          interaction.reply({
            content: `<@${interaction.user.id}>, pomyślnie utworzono ticket\n <#${channel1.id}>`,
            ephemeral: true
          })

        })
      } else {
        interaction.reply({
          content: `<@${interaction.user.id}>, masz już aktywny ticket!\n <#${channel1.id}>`,
          ephemeral: true
        })
      }
    }
  }
  if (!interaction.isCommand()) return;

  const slashcmds = client.slashcommands.get(interaction.commandName)

  if (!slashcmds) return;

  try {
    await slashcmds.run(client, interaction)
  } catch (e) {
    console.error(e)
  }
})

// client.on("guildMemberAdd", async (member) => {
//   const Discord = require("discord.js")
//   const Canvas = require('canvas');
//   const canvas = Canvas.createCanvas(1100, 500);
//   const ctx = canvas.getContext('2d');
//   const background = await Canvas.loadImage("./Pliki/card.png")
//   ctx.drawImage(background, 0, 0, 1100, 500);

//   ctx.font = '32px Sans Not-Rotated'
//   ctx.fillStyle = "white";
//   ctx.textAlign = "center";
//   ctx.fillText(`Użytkownik #${member.guild.memberCount}`, 550, 450)

//   ctx.font = '38px Sans Not-Rotated'
//   ctx.fillStyle = "white";
//   ctx.textAlign = "center";
//   ctx.fillText(`Witaj na serwerze ${member.user.tag}`, 550, 400)

//   ctx.beginPath()
//   ctx.arc(550, 200, 150, 0, 2 * Math.PI);
//   ctx.strokeStyle = "#23272a";
//   ctx.lineWidth = 15;
//   ctx.closePath();
//   ctx.clip();

//   const avatar = await Canvas.loadImage(member.user.displayAvatarURL({
//     format: "jpg",
//     size: 1024,
//     dynamic: true
//   }));
//   ctx.drawImage(avatar, 400, 50, 300, 300);
//   const attachment = new Discord.MessageAttachment(
//     canvas.toBuffer())
//   member.guild.channels.cache.get("920985574729469962").send({
//       content: `Witaj <@${member.user.id}> na serwerze\n :dog:**Samoyed Gaming**:dog:`,
//       files: [attachment]
//     })

//     .catch((err) => console.log(err));
// });

// client.on("guildMemberRemove", (member) => {
//   const embed = new MessageEmbed()
//     .setAuthor(`${member.user.tag} opuścił/a nasz serwer!`, member.user.avatarURL())
//     .setDescription("Przykro nam z tego powodu <:cry:925797239652220929>")
//     .setColor("FF0000");
//   member.guild.channels.cache.get("920985577506078730").send({
//       embeds: [embed]
//     })

//     .catch((err) => console.log(err));
// });

client.on("ready", () => {
  console.log(chalk.green(`Zalogowano jako ${client.user.tag}!`));
  //wiadomosc pierwsza
  client.user.setActivity("Programuje 24/7", {
    type: "STREAMING",
    url: "https://www.twitch.tv/samoyedfranek"
  });
  client.channels.cache.get("920985565682360320").messages.fetch("924398092009218048").then(msg => {
    let ifilter = i => !i.user.bot;
    const collector = msg.createMessageComponentCollector({
      filter: ifilter
    })
    //wiadomosc pierwsza

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

  //----------------------------------------------
  client.channels.cache.get("920985572745555969").messages.fetch("924380751879892992").then(msg => {
    let ifilter = i => !i.user.bot;

    const collector = msg.createMessageComponentCollector({
      filter: ifilter
    })

    //wiadomosc pierwsza

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

  //wiadomosc druga

  client.channels.cache.get("920985572745555969").messages.fetch("924380753033318470").then(msg => {
    let ifilter = i => !i.user.bot;

    const collector = msg.createMessageComponentCollector({
      filter: ifilter
    })

    collector.on("collect", async i => {
      if (i.customId === "pc") {
        if (!i.member.roles.cache.has("920985542106161162")) {
          await i.member.roles.add("920985542106161162")
          i.reply({
            content: "Otrzymano rolę <@&920985542106161162>",
            ephemeral: true
          })
        } else {
          await i.member.roles.remove("920985542106161162")
          i.reply({
            content: "Usunięto rolę <@&920985542106161162>",
            ephemeral: true
          })
        }
      }
      if (i.customId === "ps") {
        if (!i.member.roles.cache.has("920985542643023903")) {
          await i.member.roles.add("920985542643023903")
          i.reply({
            content: "Otrzymano rolę <@&920985542643023903>",
            ephemeral: true
          })
        } else {
          await i.member.roles.remove("920985542643023903")
          i.reply({
            content: "Usunięto rolę <@&920985542643023903>",
            ephemeral: true
          })
        }
      }
      if (i.customId === "xb") {
        if (!i.member.roles.cache.has("920985543750344734")) {
          await i.member.roles.add("920985543750344734")
          i.reply({
            content: "Otrzymano rolę <@&920985543750344734>",
            ephemeral: true
          })
        } else {
          await i.member.roles.remove("920985543750344734")
          i.reply({
            content: "Usunięto rolę <@&920985543750344734>",
            ephemeral: true
          })
        }
      }
      if (i.customId === "n") {
        if (!i.member.roles.cache.has("920985544811483166")) {
          await i.member.roles.add("920985544811483166")
          i.reply({
            content: "Otrzymano rolę <@&920985544811483166>",
            ephemeral: true
          })
        } else {
          await i.member.roles.remove("920985544811483166")
          i.reply({
            content: "Usunięto rolę <@&920985544811483166>",
            ephemeral: true
          })
        }
      }
    })
  })

  //wiadomosc trzecia

  client.channels.cache.get("920985572745555969").messages.fetch("924380754128015400").then(msg => {
    let ifilter = i => !i.user.bot;

    const collector = msg.createMessageComponentCollector({
      filter: ifilter
    })

    collector.on("collect", async i => {

      if (i.customId === "s") {
        if (!i.member.roles.cache.has("924378347562237952")) {
          await i.member.roles.add("924378347562237952")
          i.reply({
            content: "Otrzymano rolę <@&924378347562237952>",
            ephemeral: true
          })
        } else {
          await i.member.roles.remove("924378347562237952")
          i.reply({
            content: "Usunięto rolę <@&924378347562237952>",
            ephemeral: true
          })
        }
      }
      if (i.customId === "m") {
        if (!i.member.roles.cache.has("920985548238233620")) {
          await i.member.roles.add("920985548238233620")
          i.reply({
            content: "Otrzymano rolę <@&920985548238233620>",
            ephemeral: true
          })
        } else {
          await i.member.roles.remove("920985548238233620")
          i.reply({
            content: "Usunięto rolę <@&920985548238233620>",
            ephemeral: true
          })
        }
      }
      if (i.customId === "gta") {
        if (!i.member.roles.cache.has("920985549509111879")) {
          await i.member.roles.add("920985549509111879")
          i.reply({
            content: "Otrzymano rolę <@&920985549509111879>",
            ephemeral: true
          })
        } else {
          await i.member.roles.remove("920985549509111879")
          i.reply({
            content: "Usunięto rolę <@&920985549509111879>",
            ephemeral: true
          })
        }
      }
      if (i.customId === "cs") {
        if (!i.member.roles.cache.has("920985551442681867")) {
          await i.member.roles.add("920985551442681867")
          i.reply({
            content: "Otrzymano rolę <@&920985551442681867>",
            ephemeral: true
          })
        } else {
          await i.member.roles.remove("920985551442681867")
          i.reply({
            content: "Usunięto rolę <@&920985551442681867>",
            ephemeral: true
          })
        }
      }
    })
  })

  const embed = new MessageEmbed()

    .setTitle(botname)
    .setColor(0xb65307)
    .setDescription(`Zostałem poprawnie załadowany.`);
  client.channels.cache.get("920985622695514112").send({
    embeds: [embed]
  });
  client.settings.forEach((config, guildid) => {
    const {
      guilds
    } = client;
  });
});
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const {
  GiveawaysManager
} = require('discord-giveaways');
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
  storage: './giveaways.json',
  default: {
    botsCanWin: false,
    embedColor: '#FF0000',
    embedColorEnd: '#000000',
    reaction: '🎉'
  }
});
// We now have a giveawaysManager property to access the manager everywhere!
client.giveawaysManager = manager;
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'giveway') {
    if (interaction.options.getSubcommand() === 'start') {

    let permissions = interaction.member.permissions.has("MODERATE_MEMBERS")
    if (!permissions) return interaction.reply("Nie masz permisji do użycia tej komendy!")

    const ms = require('ms');
    const duration = interaction.options.getString('czas');
    const winnerCount = interaction.options.getInteger('wygrani');
    const prize = interaction.options.getString('nagroda');
    client.giveawaysManager.start(interaction.channel, {
        duration: ms(duration),
        winnerCount,
        prize
    }).then((gData) => {
        console.log(gData); // {...} (messageId, end date and more)
    });
    }
  }
})
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  if (interaction.commandName === 'giveway') {
    if (interaction.options.getSubcommand() === 'reroll') {

    let permissions = interaction.member.permissions.has("MODERATE_MEMBERS")
    if (!permissions) return interaction.reply("Nie masz permisji do użycia tej komendy!")

    const messageId = interaction.options.getString('it');
    client.giveawaysManager.reroll(messageId).then(() => {
        interaction.channel.send('Brawo! Przerolowano giveway!');
    }).catch((err) => {
        interaction.channel.send(`Wystąpił problem.\n\`${err}\``);
    });
  }
  }
})
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  if (interaction.commandName === 'giveway') {
    if (interaction.options.getSubcommand() === 'koniec') {

    let permissions = interaction.member.permissions.has("MODERATE_MEMBERS")
    if (!permissions) return interaction.reply("Nie masz permisji do użycia tej komendy!")

    const messageId = interaction.options.getString('id');
    client.giveawaysManager.end(messageId).then(() => {
        interaction.channel.send('Brawo! Zakończono giveway!');
    }).catch((err) => {
        interaction.channel.send(`Wystąpił problem.\n\`${err}\``);
    });
    }
  }
})
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
client.login(token);

client.on("debug", () => {});
client.on("warn", () => {});
client.on("error", () => {});

console.log(process.version);
