const botauthor = "Samoyed Franek#9264";
const botversion = "v1.0 beta";
const botname = "Samoyed Bot";

const {
  discord,
  MessageButton,
  Client,
  ReactionCollector,
  MessageActionRow,
} = require("discord.js");
const {
  Permissions: {
    FLAGS
  },
  MessageEmbed,
} = require("discord.js");

module.exports = {
  userPermissions: [FLAGS.MANAGE_MESSAGES],
  name: "rola",
  description: "Wysyła link do serwera",
  usage: " ",
  guildOnly: true,
  aliases: ["l"],

  async run(msg, reaction, channel) {
    const embed = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription("Wybierz Płeć.")
      .setDescription("Regulamin")
      .addField("Chłopak", "- 👦")
      .addField("Dziewczyna", "- 👧")
      .addField("Autor", botauthor, true)
      .addField("Wersja", botversion, true);

    const first = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('ch')
        .setLabel('👦')
        .setStyle('SUCCESS'),
      )
      .addComponents(
        new MessageButton()
        .setCustomId('dz')
        .setLabel('👧')
        .setStyle('SUCCESS'),
      )
    let msgEmbed = await msg.channel.send({
      components: [first],
      embeds: [embed]
    });

    const embed1 = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription("Wybierz Platformę.")
      .addField("Pc", "- 🖥️")
      .addField("PlayStation", "- 🎮")
      .addField("Xbox", "- 🕹️")
      .addField("Nintendo", "- ⌨️")
      .addField("Autor", botauthor, true)
      .addField("Wersja", botversion, true);

    const second = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('pc')
        .setLabel('🖥️')
        .setStyle('SUCCESS'),
      )
      .addComponents(
        new MessageButton()
        .setCustomId('ps')
        .setLabel('🎮')
        .setStyle('SUCCESS'),
      )
      .addComponents(
        new MessageButton()
        .setCustomId('xb')
        .setLabel('🕹️')
        .setStyle('SUCCESS'),
      )
      .addComponents(
        new MessageButton()
        .setCustomId('n')
        .setLabel('⌨️')
        .setStyle('SUCCESS'),
      )

    let msgEmbed1 = await msg.channel.send({
      components: [second],
      embeds: [embed1]
    });

    const embed2 = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription("Wybierz Gry")
      .addField("Scrap Mechanic", "- :regional_indicator_s:")
      .addField("Minecraft", "- :regional_indicator_m:")
      .addField("Grand Theft Auto 5", "- :regional_indicator_g:")
      .addField("Counter Strike", "- :regional_indicator_z:")
      .addField("Autor", botauthor, true)
      .addField("Wersja", botversion, true);

    const third = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('s')
        .setEmoji("🇸")
        .setStyle('SUCCESS'),
      )
      .addComponents(
        new MessageButton()
        .setCustomId('m')
        .setEmoji('🇲')
        .setStyle('SUCCESS'),
      )
      .addComponents(
        new MessageButton()
        .setCustomId('gta')
        .setEmoji('🇬')
        .setStyle('SUCCESS'),
      )
      .addComponents(
        new MessageButton()
        .setCustomId('cs')
        .setEmoji('🇿')
        .setStyle('SUCCESS'),
      );
    let msgEmbed2 = await msg.channel.send({
      components: [third],
      embeds: [embed2]
    });
  },
};