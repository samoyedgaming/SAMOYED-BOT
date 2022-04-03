const {
    MessageEmbed
} = require("discord.js");
const chalk = require("chalk");
module.exports = {
    name: "ready",

    async run(client) {
        console.log(chalk.green(`Zalogowano jako ${client.user.tag}!`));
        //wiadomosc pierwsza
        client.user.setPresence({
            status: 'dnd'
        })
        client.user.setPresence({
            activities: [{
                name: `Programuje 24/7`,
                type: `STREAMING`
            }]
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