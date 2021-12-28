const dotenv = require("dotenv").config();
const {
  Client
} = require("discord.js");
const client = new Client({
  intents: []
});
const {
  Permissions: {
    FLAGS
  },
  MessageEmbed,
} = require("discord.js");
const { guildOnly } = require("../Komendy/Slash-Komendy/Komenda-Slash-Link");

module.exports = {
  token: process.env.TOKEN,
  prefix: ".",
  owner: "622714126841675778",
  clientID: "805872253282811946",
  guild: "770930426767998987",
};