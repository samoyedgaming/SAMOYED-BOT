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
        setInterval(async () => {
            setTimeout(function () {
                client.user.setPresence({
                    activities: [{
                        name: `Aktualnie nic nie robię`,
                        type: `PLAYING`
                    }]
                });
            }, 15000);
            setTimeout(function () {
                client.user.setPresence({
                    activities: [{
                        name: `Serdecznie cię zapraszam na https://discord.gg/tPrEPhCB38`,
                        type: `PLAYING`
                    }]
                });
            }, 15000);
            setTimeout(function () {
                client.user.setPresence({
                    activities: [{
                        name: `Programuje 24/7`,
                        type: `STREAMING`
                    }]
                });
            }, 15000);
            setTimeout(function () {
                client.user.setPresence({
                    activities: [{
                        name: `Mata - Szafir`,
                        type: `LISTENING`
                    }]
                });
            }, 15000);
            setTimeout(function () {
                client.user.setPresence({
                    activities: [{
                        name: `Mata - Schodki`,
                        type: `LISTENING`
                    }]
                });
            }, 15000);
            setTimeout(function () {
                client.user.setPresence({
                    activities: [{
                        name: `Mata - Prawy do lewego`,
                        type: `LISTENING`
                    }]
                });
            }, 15000);
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