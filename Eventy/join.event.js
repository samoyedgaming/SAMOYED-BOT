const {
  MessageEmbed
} = require("discord.js");

module.exports = {
  name: "guildMemberAdd",

  async run(member, guild) {
    const Discord = require("discord.js")
    const Canvas = require('canvas');
    const canvas = Canvas.createCanvas(1100, 500);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage("././Pliki/card.png")
    ctx.drawImage(background, 0, 0, 1100, 500);

    ctx.font = '32px Sans Not-Rotated'
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(`Użytkownik #${member.guild.memberCount}`, 550, 450)

    ctx.font = '38px Sans Not-Rotated'
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(`Witaj na serwerze ${member.user.tag}`, 550, 400)

    ctx.beginPath()
    ctx.arc(550, 200, 150, 0, 2 * Math.PI);
    ctx.strokeStyle = "#23272a";
    ctx.lineWidth = 15;
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({
      format: "jpg",
      size: 1024,
      dynamic: true
    }));
    ctx.drawImage(avatar, 400, 50, 300, 300);
    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer())
    member.guild.channels.cache.get("920985574729469962").send({
        content: `Witaj <@${member.user.id}> na serwerze\n **Samoyed Studio**`,
        files: [attachment]
      })

      .catch((err) => console.log(err));
  }
};