const Canvas = require("canvas");
const chalk = require("chalk");
const { MessageAttachment } = require("discord.js");

module.exports = {
  name: "poziom",
  decription: "wyświetla baner",
  guildOnly: true,

  async run(msg, args) {
    const level1 = "16";

    const canvas = Canvas.createCanvas(900, 300);
    const ctx = canvas.getContext("2d");

    const background = await Canvas.loadImage(
      __dirname + "/../Pliki/wallpaper.png"
    );
    const diamond = await Canvas.loadImage(__dirname + "/../Pliki/diamond.png");
    const level = await Canvas.loadImage(__dirname + "/../Pliki/lvl.png");

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(diamond, 760, 140, 100, 100);
    ctx.drawImage(level, 230, 200, 500, 100);

    ctx.font = "40px Consolas";
    ctx.fillStyle = "white";
    ctx.fillText(msg.member.user.tag, 275, 200);

    ctx.font = "30px Unispace";
    ctx.fillStyle = "#118591";
    ctx.fillText(`Level`, 710, 80);

    ctx.font = "50px Unispace";
    ctx.fillStyle = "#10cbde";
    ctx.fillText(`${level1}`, 810, 85);

    ctx.beginPath();
    ctx.arc(150, 150, 95, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    ctx.fillStyle = "#23272a";
    ctx.fillRect(50, 50, 200, 200);

    ctx.beginPath();
    ctx.arc(150, 150, 85, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(
      msg.member.user.displayAvatarURL({ format: `jpg` })
    );

    ctx.drawImage(avatar, 63, 63, 175, 175);

    const atachment = new MessageAttachment(canvas.toBuffer(), "wallpaper.jpg");

    msg.channel.send("", atachment);
  },
};
