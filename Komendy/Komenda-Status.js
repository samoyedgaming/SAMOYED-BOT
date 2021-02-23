const botauthor = 'Samoyed Franek#9264'
const botversion = 'v1.0 beta'
const botname = "Samoyed Bot"

const { MessageEmbed } = require("discord.js")

const activities = [
    "PLAYING",
    "STREAMING",
    "LISTENING",
    "WATCHING",
    "CUSTOM_STATUS",
    "CLEAR",
]

module.exports = {
    name: "status",
    description: "Ustawia status bota",
    usage: "nic",
    guildOnly: true,
    aliases: ["s"],
    ownerOnly: true,
    


run(msg, args) {
        const { client } = msg

        const activityType = args[0].toUpperCase()
        let activityName = [...args].slice(1).join(" ")

        if (!activities.includes(activityType)) {
            const embed = new MessageEmbed()
        
            .setTitle(botname)
            .setColor(0xb65307)
            .setDescription(`Zła nazwa aktywności. Zezwolone typy aktywności: \`${activities.join("` ,`",)}\`.`,)
            .addField("Autor", botauthor, true)
            .addField("Wersja", botversion, true)
    
            return msg.channel.send(embed)  
        }

        if (activityType === "CLEAR") activityName = ""

        const presenceOptions = {activity: { name: activityName }, status: activityType }
            
            client.user.setPresence(presenceOptions).then((presence) => {
                msg.react("👍")
            }
    )}
}
