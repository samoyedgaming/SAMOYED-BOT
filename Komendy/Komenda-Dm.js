const {Client,
  MessageEmbed
} = require("discord.js");

module.exports = {
  name: "dm",
  description: "Wyświetla dane bota",
  guildOnly: true,

  run(msg) {
    const {
      channel
    } = msg;
    client.on('message', (msg) => {
      if (!msg.author.bot) msg.author.send('ok ' + msg.author.id);
     });
  }
}