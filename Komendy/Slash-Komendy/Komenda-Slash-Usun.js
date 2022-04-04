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

  async run(client, interaction) {
    let permissions = interaction.member.permissions.has("MODERATE_MEMBERS")
    if (!permissions) return interaction.reply("Nie masz permisji do użycia tej komendy!")
    const channel = interaction.channel
    const amount = interaction.options.getNumber('liczba');

    if (!Number.isInteger(amount)) {
      const embed = new MessageEmbed()

        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription(`Musisz podać liczbę wiadomości którą chcesz usunąć.`);

      return interaction.reply({
        embeds: [embed],
        ephemeral: true
      });
    }

    if (amount < 2 || amount >= 101) {
      const embed = new MessageEmbed()

        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription(
          `Liczba usuwanych wiadomości nie może być większa niż 100 ani mniejsza niż 2.`
        );

      return interaction.reply({
        embeds: [embed],
        ephemeral: true
      });
    }

    channel.bulkDelete(amount);

    const embed = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(`Usunąłem ${amount} wiadomości.`);
    interaction.reply({
      embeds: [embed],
      ephemeral: true
    })
  },
};