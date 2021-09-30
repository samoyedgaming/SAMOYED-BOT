const { MessageEmbed } = require("discord.js");
const { ucfirst } = require("@m7rlin/js-helpers");

const botauthor = "Samoyed Franek#9264";
const botversion = "v1.0 beta";
const botname = "Samoyed Bot";

module.exports = {
  name: "korona",
  description:
    "Podaje informacje o ilości zakażeń, zgonów i wyzdrowień na koronawirusa.",
  guildOnly: true,
  aliases: ["k"],

  async run(msg, args) {
    const {
      channel,
      client: { axios },
    } = msg;

    const arg = args[0];

    if (arg === "wszystkie") {
      const data = await axios
        .get("https://disease.sh/v3/covid-19/all")
        .then(({ data }) => data);

      const { cases, deaths, recovered } = data;

      const embed = new MessageEmbed()

        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription(`Globalne statystyki Korona Wirusa`)
        .addField(`🤢Zachorowało:`, cases)
        .addField(`☠️Zmarło:`, deaths)
        .addField(`💚Wyzdrowiało:`, recovered)
        .addField("Autor", botauthor, true)
        .addField("Wersja", botversion, true);
      return channel.send({ embeds: [embed] });
    }

    const data = await axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then(({ data }) => data);

    const countryName = ucfirst(arg.toLowerCase());

    const country = data.filter((x) => x.country === countryName);

    if (!country.length) {
      const embed = new Messag()

        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription(`Kraj \`${countryName}\` nie został znaleziony`)
        .addField("Autor", botauthor, true)
        .addField("Wersja", botversion, true);
      return channel.send({ embeds: [embed] });
    }
    const { cases, todayCases, deaths, todayDeaths, recovered, critical } =
      country[0];

    const embed = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription(`Statystyki dla kraju \`${countryName}\``)
      .addField(`🤢Zachorowało:`, cases)
      .addField(`☠️Zmarło:`, deaths)
      .addField(`💚Wyzdrowiało:`, recovered)
      .addField("Autor", botauthor, true)
      .addField("Wersja", botversion, true);
    channel.send({ embeds: [embed] });
  },
};
