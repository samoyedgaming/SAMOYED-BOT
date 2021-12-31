const {
  MessageEmbed
} = require("discord.js");
const {
  SlashCommandBuilder
} = require('@discordjs/builders');
const Discord = require("discord.js")
const snipe = require("../../Schematy/snipeSchema.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("snipe")
    .setDescription("Wyświetla ostatnio usuniętą wiadomość"),

  async run(client, interaction) {
    const botauthor = "Samoyed Franek#9264";
    const botversion = "v1.0 beta";
    const botname = "Samoyed Bot";
    const botdescription = "Jestem Botem który zastępuje większość botów.";
    let permissions = interaction.member.permissions.has("MODERATE_MEMBERS")
    if (!permissions) return interaction.reply("Nie masz permisji do użycia tej komendy!")
    let data = await snipe.findOne({ channelId: interaction.channel.id })

    if(!data){
        return interaction.reply({ content: "Nie ma ostatnio usuniętej wiadomości", ephemeral: true })
    }

    const embed = new MessageEmbed()

      .setTitle(`Wiadomość od ${data.author}`)
      .setDescription(`${data.message}`)
      .addField("Kanał", `<#${data.channelId}>`, true)
      .addField("Godzina", `<t:${data.time}:R>`, true)
      .setColor(0xb65307);

    interaction.reply({
      embeds: [embed],
      ephemeral: true
    });
  },
};