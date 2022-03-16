const botauthor = "Samoyed Franek#9264";
const botversion = "v1.0 beta";
const botname = "Samoyed Bot";
const {
  MessageEmbed
} = require("discord.js");
const info = "Wyświetla dane bota.";
const pomoc = "Wyświetla wszystkie komendy.";
const usun = "Usuwa podaną liczbę wiadomości od 2 do 100.";
const korona =
  "Podaje informacje o ilości zakażeń, zgonów i wyzdrowień na koronawirusa.";
const link = "Wysyła permamenty link do tego serwera.";
const wyrzuc = "Wyrzuca danego użytkownika.";
const banuj = "Banuje danego użytkownika.";
const iq = "Wyświetla ile masz iq.";
const str = "Wysyła moją stronę internetową.";
const {
  SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pomoc")
    .setDescription("Wyswietla informacje o wszytskich komendach lub o danej komendzie."),

  async run(client, interaction, msg, args) {
    const embed = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription("Wszystkie komendy są na tej stronie: https://smydbot.ga (Jeszcze nie działa)")

    interaction.reply({
      embeds: [embed],
      ephemeral: true
    });
  },
};