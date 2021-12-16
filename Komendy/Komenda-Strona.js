const botauthor = "Samoyed Franek#9264";
const botversion = "v1.0 beta";
const botname = "Samoyed Bot";

const {
  Permissions: {
    FLAGS
  },
  MessageEmbed,
} = require("discord.js");

module.exports = {
  name: "strona",
  description: "Wysyła strone serwera",
  usage: " ",
  guildOnly: true,
  aliases: ["strona"],
  userPermissions: [FLAGS.SEND_MESSAGES],

  run(msg) {
    const embed = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(
        "Moja własna strona internetowa: https://samoyedfranek.github.io/site/home.html."
      )
      .addField("Autor", botauthor, true)
      .addField("Wersja", botversion, true);

    msg.channel.send({
      embeds: [embed]
    });
  },
};