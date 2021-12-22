const { default: ReactionRole } = require("discordjs-reaction-role");
const {
  Client,
  Intents,
  MessageEmbed,
} = require("discord.js");
const Canvas = require("canvas");
const chalk = require("chalk");
const client = new Client({
  partials: ["MESSAGE", "REACTION"],
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


const rr = new ReactionRole(client, [
  { messageId: "920987139120967712", reaction: "👍", roleId: "920985535571435552" }, // Basic usage
  { messageId: "920987139120967712", reaction: "👍", roleId: "920985538687803442" }, // Multiple reactions per message!
  { messageId: "920987139120967712", reaction: "👍", roleId: "920985541355393104" }, // Custom emoji by ID
  { messageId: "920987139120967712", reaction: "👍", roleId: "9209855458558853222" }, // Custom emoji by emoji name
]);

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
  O: "920985550863892490",
  CS: "920985551442681867",
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
  client.channels.cache.get("920985622695514112").send({
    embeds: [embed]
  });

  client.settings.forEach((config, guildid) => {
    const {
      guilds
    } = client;
  });
});



client.login(token);

client.on("debug", () => {});
client.on("warn", () => {});
client.on("error", () => {});

console.log(process.version);