const {
    MessageButton,
    MessageActionRow,
    MessageEmbed

} = require("discord.js");
const {
    Permissions: {
        FLAGS
    }
} = require("discord.js");
module.exports = {
    userPermissions: [FLAGS.MANAGE_MESSAGES],
    name: "ticket",
    description: "Tworzy ticket",

    run(msg, client, args) {
        const embed = new MessageEmbed()
            .setTitle("Ticket")
            .setDescription("Kliknij w guzik poniżej aby stworzyć ticket żeby zgłosić błąd/kogoś.\n Odrazu po stworzeniu ticketa proszę napisać powód ponieważ w innym przypadku osoba ta zostanie wyciszona na 1 dzień")
            .setColor("YELLOW")

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId("ticket")
                .setStyle("SUCCESS")
                .setLabel("Stwórz Ticket")
                .setEmoji("🎫")
            )
        msg.channel.send({
            embeds: [embed],
            components: [row]
        })
    }
}