const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "info",
  description: "Wyświetla dane bota",
  guildOnly: true,

  run(msg) {
    const { channel } = msg;
    const botauthor = "Samoyed Franek#9264";
    const botversion = "v1.0 beta";
    const botname = "Samoyed Bot";
    const botdescription = "Jestem Botem który zastępuje większość botów.";

    const embed = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(botdescription)
      .addField("Autor", botauthor, true)
      .addField("Wersja", botversion, true);

    channel.send(embed);
  },
};
