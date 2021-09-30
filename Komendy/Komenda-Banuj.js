const {
  Permissions: { FLAGS },
} = require("discord.js");

const { MessageEmbed } = require("discord.js");
const botauthor = "Samoyed Franek#9264";
const botversion = "v1.0 beta";
const botname = "Samoyed Bot";
module.exports = {
  name: "banuj",
  description: "Banuje daną osobe",
  usage: "<osoba> <powod>",
  guildOnly: true,
  aliases: ["b"],
  userPermissions: [FLAGS.BAN_MEMBERS],

  run(msg, args) {
    const { channel, guild, author, mentions } = msg;

    const reasonArg = [...args].slice(1).join(" ");
    const userToBan = mentions.users.first();

    if (!userToBan) {
      const embed = new MessageEmbed()

        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription("Musisz podać jakiego użytkownika chcesz zbanować.")
        .addField("Autor", botauthor, true)
        .addField("Wersja", botversion, true);

      return channel.send({ embeds: [embed] });
    }

    if (userToBan.id === author.id) {
      const embed = new MessageEmbed()

        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription("Nie możesz zbanować samego siebie.")
        .addField("Autor", botauthor, true)
        .addField("Wersja", botversion, true);

      return channel.send({ embeds: [embed] });
    }
    const memberToBan = guild.members.cache.get(userToBan.id);

    if (!memberToBan.bannable) {
      const embed = new MessageEmbed()

        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription(
          "Masz za niską role do używania tej komendy albo użytkownik którego chcesz zbanować ma za wysoką role."
        )
        .addField("Autor", botauthor, true)
        .addField("Wersja", botversion, true);

      return channel.send({ embeds: [embed] });
    }

    const banOptions = {
      Powód: reasonArg,
    };

    memberToBan.ban(banOptions).then((bannedUser) => {
      const embed = new MessageEmbed()

        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription(
          `Użytkownik \`${bannedUser.displayName}\` został zbanowany. \n${
            reasonArg ? `\nPowód: ${reasonArg}` : ""
          }`
        )
        .addField("Autor", botauthor, true)
        .addField("Wersja", botversion, true);

      msg.channel.send({ embeds: [embed] });
    });
  },
};
