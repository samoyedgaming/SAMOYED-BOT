const {
  Permissions: {
    FLAGS
  },
  Interaction,
} = require("discord.js");
const {
  SlashCommandBuilder
} = require('@discordjs/builders');
const {
  MessageEmbed
} = require("discord.js")
const Discord = require("discord.js")
const botauthor = "Samoyed Franek#9264";
const botversion = "v1.0 beta";
const botname = "Samoyed Bot";
module.exports = {
  data: new SlashCommandBuilder()
    .setName("usun")
    .setDescription("Usuwa daną ilość wiadomości na kanale")
    .addNumberOption(option => option.setName('liczba').setDescription('Wpisz liczbę').setRequired(true)),

  async run(client, interaction, msg, args, channel) {

    const amount = interaction.options.getNumber('liczba');

    if (!Number.isInteger(amount)) {
      const embed = new MessageEmbed()

        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription(`Musisz podać liczbę wiadomości którą chcesz usunąć.`)
        .addField("Autor", botauthor, true)
        .addField("Wersja", botversion, true);

      return interaction.reply({
        embeds: [embed]
      });
    }

    if (amount < 2 || amount >= 1001) {
      const embed = new MessageEmbed()

        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription(
          `Liczba usuwanych wiadomości nie może być większa niż 100 ani mniejsza niż 2.`
        )
        .addField("Autor", botauthor, true)
        .addField("Wersja", botversion, true);

      return interaction.reply({
        embeds: [embed]
      });
    }

    msg.channel.bulkDelete(amount);

    const embed = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(`Usunąłem ${amount} wiadomości.`)
      .addField("Autor", botauthor, true)
      .addField("Wersja", botversion, true);
    interaction.reply({
      embeds: [embed]
    }).then(msg => msg.delete({
      timeout: "10000"
    }))
  },
};