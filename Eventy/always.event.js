const {
    MessageEmbed
} = require("discord.js");
const chalk = require("chalk");
module.exports = {
    name: "ready",

    async run(client) {
        console.log(chalk.green(`Zalogowano jako ${client.user.tag}!`));
        //wiadomosc pierwsza
        client.user.setActivity("Programuje 24/7", {
            type: "STREAMING",
            url: "https://www.twitch.tv/samoyedfranek",
            status: "dnd"
        });
        const embed = new MessageEmbed()

            .setTitle("Samoyed Bot")
            .setColor(0xb65307)
            .setDescription(`Zostałem poprawnie załadowany.`);
        client.channels.cache.get("920985622695514112").send({
            embeds: [embed]
        });
    }
}