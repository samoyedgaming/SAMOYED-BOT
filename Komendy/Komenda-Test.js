const Canvas = require("canvas");
const chalk = require("chalk");
const { MessageAttachment } = require("discord.js");

module.exports = {
    name: "test",
    decription: "wyświetla baner",
    guildOnly: true,

    async run(msg, args) {
        const canvas = Canvas.createCanvas(1100, 500)
        const ctx = canvas.getContext("2d")

        const background = await Canvas.loadImage(__dirname + '/../Pliki/card.png')
        const diamond = await Canvas.loadImage(__dirname + '/../Pliki/diamond.png')
        const level = await Canvas.loadImage(__dirname + '/../Pliki/lvl.png')
        
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
        ctx.drawImage(diamond, 925, 50, 100, 100)

        ctx.font = "42px Consolas"
        ctx.fillStyle = "white"
        ctx.fillText(`${msg.member.user.tag} dołączył do serwera`, 100, 435)
        
        ctx.beginPath()
        ctx.arc(557, 243, 120, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.clip()

        ctx.fillStyle = "white"
        ctx.fillRect(420, 105, 275, 275)

        ctx.beginPath()
        ctx.arc(557, 243, 113, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.clip()

        const avatar = await Canvas.loadImage(msg.member.user.displayAvatarURL({ format: `jpg` }))

        ctx.drawImage(avatar, 445, 130, 250, 250)

        const atachment = new MessageAttachment(canvas.toBuffer(), "wallpaper.jpg")

        msg.channel.send("", atachment)
    }
}