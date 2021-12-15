const {
  MessageEmbed
} = require("discord.js");

module.exports = {
  name: "ile-mam-iq",
  description: "Wyświetla ile masz iq",
  guildOnly: true,

  run(msg, args) {
    const random = Math.floor(Math.random() * 501);

    const {
      channel
    } = msg;
    const botauthor = "Samoyed Franek#9264";
    const botversion = "v1.0 beta";
    const botname = "Samoyed Bot";
    const botdescription = "Jestem Botem który zastępuje większość botów.";

    const embed = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(`Masz ${random} IQ`)
      .addField("Autor", botauthor, true)
      .addField("Wersja", botversion, true);

    channel.send({
      embeds: [embed]
    });
  },
};