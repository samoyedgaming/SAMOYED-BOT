const {
  MessageEmbed
} = require("discord.js");

module.exports = {
  name: "info",
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