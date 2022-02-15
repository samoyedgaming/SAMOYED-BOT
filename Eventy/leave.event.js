const {
  MessageEmbed
} = require("discord.js");

module.exports = {
  name: "guildMemberRemove",

  run(member) {
    const embed = new MessageEmbed()
    .setAuthor(`${member.user.tag} opuścił/a nasz serwer!`, member.user.avatarURL())
    .setDescription("Przykro nam z tego powodu <:cry:925797239652220929>")
    .setColor("FF0000");
  member.guild.channels.cache.get("920985577506078730").send({
      embeds: [embed]
    })

    .catch((err) => console.log(err));
  }};