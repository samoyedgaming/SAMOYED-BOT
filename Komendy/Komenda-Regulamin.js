const botauthor = "Samoyed Franek#9264";
const botversion = "v1.0 beta";
const botname = "Regulamin";

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
  name: "regulamin",
  description: "",
  usage: " ",
  guildOnly: true,

  async run(msg, reaction, channel) {

    const embed = new MessageEmbed()

      .setTitle(botname)
      .setColor(0xb65307)
      .setDescription("**§1. Ogólne zasady\n**\n - §1.1. Wchodząc na serwer discord, akceptujesz nasz regulamin.\n - §1.2. Nieznajomość regulaminu nie zwalnia Cię z jego przestrzegania.\n - §1.3. Wszystkich administratorów i użytkowników obowiązuje kultura osobista.\n - §1.4. Skargi, odwołania od bana oraz błędy można zgłaszać na kanale... \n - §1.5. Zakaz wszelkiego rodzaju spamowania.\n - §1.6. Zakaz używania modulatora głosu.\n - §1.7. Zakaz krzyczenia/piszczenia do mikrofonu.\n - §1.8. Zakaz nagrywania głosu i publikacji jakiejkolwiek zawartości tego typu publicznie.\n - §1.9. Zakaz używania prefiksów z nazwą rang.\n - §1.10 Działania mające na celu zaszkodzenie serwerowi są zabronione. \n - §1.11  Jeżeli osoba po dodaniu ostrzeżenia dalej nie zmieniła swojego zachowania `CZEKA JĄ BAN`\n**\n§2. Użytkownicy§**\n\n2.1. Zakaz wszelkiego rodzaju obrażania innych użytkowników.\n - §2.2. Zakaz używania nicków, awatarów, nazw kanałów i opisów które są wulgarne, rasistowskie, propagują nazizm, nienawiść i nietolerancję lub obrażają innych użytkowników.\n - §2.3. Zakaz podszywania się pod administrację.\n - §2.4. Zakaz bezzasadnego wchodzenia na kanały pomocy.\n - §2.5. Zakaz reklamowania wszelkich treści niezwiązanych z serwerem Samoyed Studio.\n - §2.6. Zakaz puszczania muzyki na kanałach administracji.\n - §2.7. Zakaz udostępniania i rozpowszechniania danych osobowych/zdjęć administracji/użytkowników.\n**\n§3. Administracja\n**\n - §3.1. Każdy administrator ma obowiązek udzielić pomocy użytkownikowi, jeśli ten jej potrzebuje.\n - §3.2. Administracja musi zachować bezstronność.\n - §3.3. Administrator ma prawo do kickowania lub banowania użytkowników nieprzestrzegających regulaminu.\n - §3.4. Administrator ma prawo wejść na kanał prywatny bez zgody użytkownika.\n - §3.5. Administrator musi posiadać nick zgodny z nickiem na forum.\n**\nJeśli akceptujesz regulamin kliknij w guzik 👍\n**\n");

    const reg = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('reg')
        .setLabel('👍')
        .setStyle('SUCCESS'),
      )
    let msgEmbed = await msg.channel.send({
      components: [reg],
      embeds: [embed]
    });
  }
};