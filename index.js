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

commandHandler(client)
settingsHandler(client)
apiHandler(client)
eventHandler(client)

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
  const command = client.commands.get(interaction.commandName);
  if (!interaction.isCommand()) return;
  if (!interaction.guild) {
      interaction.reply({ embeds: [dmNotice] });
  }
  if (!command) return;
  try {
     command.execute(interaction);
  } catch (error) {
      console.error(error);
     interaction.reply({
          embeds: [
              {
                  color: "RANDOM",
                  title: "**Wystąpił problem**",
                  description:
                      "Wystąpił problem podczas wywoływania komendy!\n`" +
                      error +
                      "`",
                  timestamp: new Date(),
                  footer: {
                      text: "Stworzony z ❤️ przez 🌻Samoyed Franek ☁#9264",
                  },
              },
          ],
          content: "",
          ephemeral: true,
      });
  }
});

client.on("messageCreate", async (message) => {
  const wait = require("node:timers/promises").setTimeout;
  if (message.author.bot) return;
  if (message.channel.type == "DM") {
     wait(500);
     message.channel.sendTyping();
     wait(1000);
     message.channel.send({ embeds: [dmNotice] });
  }
  if (message.content.includes("<@699240540385968218>")) {
      message.reply({
          embeds: [
              {
                  color: "RANDOM",
                  title: "**Potrzebujesz pomocy?**",
                  description:
                      "Wpisz `/` w polu wiadomości aby zobaczyć wszystkie dostępne komendy !",
                  fields: [
                      {
                          name: "Masz inne pytania?",
                          value: "Dołącz do mojego discorda [Klikając tutaj!](https://discord.gg/tPrEPhCB38)",
                      },
                  ],
                  timestamp: new Date(),
                  footer: {
                      text: "Stworzony z ❤️ przez 🌻Samoyed Franek ☁#9264",
                  },
              },
          ],
      });
  }
});

client.login(token);

client.on("debug", () => {});
client.on("warn", () => {});
client.on("error", () => {});

console.log(process.version);