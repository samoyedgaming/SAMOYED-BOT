const {
  Client,
  Intents,
  MessageEmbed
} = require("discord.js");
const Canvas = require("canvas");
const chalk = require("chalk");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
});

const {
  token,
  prefix
} = require("./Config/config.js")

const commandHandler = require("./Handlery/command.handler.js")
const settingsHandler = require("./Handlery/settings.handler.js")
const apiHandler = require("./Handlery/api.handler.js")
const eventHandler = require("./Handlery/event.handler.js")
const {
  guildOnly
} = require('./Komendy/Komenda-Usun.js')

const botauthor = 'Samoyed Franek#9264'
const botversion = 'v1.0 beta'
const botname = "Samoyed Bot"



const log = console.log

commandHandler(client)
settingsHandler(client)
apiHandler(client)
eventHandler(client)

const rulesMessageId = "839826980236820510"

const guildRoles = {
  SAMOYED: "770932698554171412",
  PLEC: "813398860705431603",
  PLATFORMA: "813398318893367306",
  GRA: "813397652305346602",
  CH: "813003866916257832",
  DZ: "813110297900220446",
  PC: "813110301649797130",
  PS: "813110303150702612",
  XB: "813110303855607829",
  N: "813110304661176382",
  F: "813001869491437609",
  R: "813110306019868722",
  M: "812999538754846733",
  RL: "813112473980502086",
  GTA: "813112291847176192",
  O: "813114080511787039",
  CS: "813114083200466965",
};

client.on("ready", () => {
  console.log(chalk.green(`Zalogowano jako ${client.user.tag}!`));
  client.emit(
    "guildMemberAdd",
    client.guilds.cache
    .get("770930426767998987")
    .members.cache.get("622714126841675778")
  );
  const embed = new MessageEmbed()

    .setTitle(botname)
    .setColor(0xb65307)
    .setDescription(`Zostałem poprawnie załadowany.`)
    .addField("Autor", botauthor, true)
    .addField("Wersja", botversion, true);
  client.channels.cache.get("811635924701151302").send({
    embeds: [embed]
  });

  client.settings.forEach((config, guildid) => {
    const {
      guilds
    } = client;
  });
});
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.partial) await reaction.fetch();

  const {
    message
  } = reaction;
  //zmienić rulesmessage id
  if (message.id === rulesMessageId) {
    const member = message.channel.guild.members.cache.get(user.id);

    if (reaction.emoji.name === "👍") {
      member.roles.add(guildRoles.SAMOYED);
    }
  }
});

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.partial) await reaction.fetch();

  const {
    message
  } = reaction;
  //zmienić rulesmessage id
  if (message.id === rulesMessageId) {
    const member = message.channel.guild.members.cache.get(user.id);

    if (reaction.emoji.name === "👍") {
      member.roles.remove(guildRoles.SAMOYED);
    }
  }
})
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.partial) await reaction.fetch();

  const {
    message
  } = reaction;
  //zmienić rulesmessage id
  if (message.id === rulesMessageId) {
    const member = message.channel.guild.members.cache.get(user.id);

    if (reaction.emoji.name === "👍") {
      member.roles.add(guildRoles.PLEC);
    }
  }
});

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.partial) await reaction.fetch();

  const {
    message
  } = reaction;
  //zmienić rulesmessage id
  if (message.id === rulesMessageId) {
    const member = message.channel.guild.members.cache.get(user.id);

    if (reaction.emoji.name === "👍") {
      member.roles.remove(guildRoles.PLEC);
    }
  }
});
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.partial) await reaction.fetch();

  const {
    message
  } = reaction;
  //zmienić rulesmessage id
  if (message.id === rulesMessageId) {
    const member = message.channel.guild.members.cache.get(user.id);

    if (reaction.emoji.name === "👍") {
      member.roles.add(guildRoles.GRA);
    }
  }
});

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.partial) await reaction.fetch();

  const {
    message
  } = reaction;
  //zmienić rulesmessage id
  if (message.id === rulesMessageId) {
    const member = message.channel.guild.members.cache.get(user.id);

    if (reaction.emoji.name === "👍") {
      member.roles.remove(guildRoles.GRA);
    }
  }
});
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.partial) await reaction.fetch();

  const {
    message
  } = reaction;
  //zmienić rulesmessage id
  if (message.id === rulesMessageId) {
    const member = message.channel.guild.members.cache.get(user.id);

    if (reaction.emoji.name === "👍") {
      member.roles.add(guildRoles.PLATFORMA);
    }
  }
});

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.partial) await reaction.fetch();

  const {
    message
  } = reaction;
  //zmienić rulesmessage id
  if (message.id === rulesMessageId) {
    const member = message.channel.guild.members.cache.get(user.id);

    if (reaction.emoji.name === "👍") {
      member.roles.remove(guildRoles.PLATFORMA);
    }
  }
});
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "👦") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add(guildRoles.CH);
    }
  }
});
client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "👦") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove(guildRoles.CH);
    }
  }
});
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "👧") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add(guildRoles.DZ);
    }
  }
});
client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "👧") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove(guildRoles.DZ);
    }
  }
});
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🖥️") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add(guildRoles.PC);
    }
  }
});
client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🖥️") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove(guildRoles.PC);
    }
  }
});
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🎮") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add(guildRoles.PS);
    }
  }
});
client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🎮") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove(guildRoles.PS);
    }
  }
});
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🕹️") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add(guildRoles.XB);
    }
  }
});
client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🕹️") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove(guildRoles.XB);
    }
  }
});
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "⌨️") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add(guildRoles.N);
    }
  }
});
client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "⌨️") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove(guildRoles.N);
    }
  }
});
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🇫") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add(guildRoles.F);
    }
  }
});
client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🇫") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove(guildRoles.F);
    }
  }
});
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🇷") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add(guildRoles.R);
    }
  }
});
client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🇷") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove(guildRoles.R);
    }
  }
});
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🇲") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add(guildRoles.M);
    }
  }
});
client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🇲") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove(guildRoles.M);
    }
  }
});
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🇱") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add(guildRoles.RL);
    }
  }
});
client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🇱") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove(guildRoles.RL);
    }
  }
});
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🇬") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add(guildRoles.GTA);
    }
  }
});
client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🇬") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove(guildRoles.GTA);
    }
  }
});
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🇺") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add(guildRoles.O);
    }
  }
});
client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🇺") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove(guildRoles.O);
    }
  }
});
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🇿") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add(guildRoles.CS);
    }
  }
});
client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.channel.id === "839100469544222740") {
    if (reaction.emoji.name === "🇿") {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove(guildRoles.CS);
    }
  }
});
client.login(token);

client.on("debug", () => {});
client.on("warn", () => {});
client.on("error", () => {});

console.log(process.version);