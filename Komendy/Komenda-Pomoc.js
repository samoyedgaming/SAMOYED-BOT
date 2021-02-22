const { prefix } = require("../Config/config")
const botauthor = '<@622714126841675778>'
const botversion = 'v1.0 beta'
const botname = "Samoyed Bot"
const { MessageEmbed } = require('discord.js')
const info = ("Wyświetla dane bota.")
const pomoc = ("Wyświetla wszystkie komendy.")
const usun = ("Usuwa podaną liczbę wiadomości od 2 do 100.")
const korona = ("Podaje informacje o ilości zakażeń, zgonów i wyzdrowień na koronawirusa.")
const link = ("Wysyła permamenty link do tego serwera.")
const wyrzuc = ("Wyrzuca danego użytkownika.")
const banuj = ("Banuje danego użytkownika.")
const iq = ("Wyświetla ile masz iq.")


module.exports = {
    name: "pomoc",
    description: "Wyswietla informacje o wszytskich komendach lub o danej komendzie.",
    usage: "<Nazwa Komendy>",

    run(msg, args) {
        const embed = new MessageEmbed()
        
        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription("Oto Lista komend:")
        .addField(`${prefix}info`, info)
        .addField(`${prefix}pomoc`, pomoc)
        .addField(`${prefix}usun <liczba> | <liczba>`, usun)
        .addField(`${prefix}korona wszystkie | <kraj>`, korona)
        .addField(`${prefix}link`, link)
        .addField(`${prefix}ile-mam-iq`, link)
        .addField(`${prefix}banuj <użytkownik> <powód>`, banuj)
        .addField(`${prefix}wyrzuc <użytkownik> <powód>`, wyrzuc)
        .addField("Autor", botauthor, true)
        .addField("Wersja", botversion, true)

        msg.channel.send(embed)
    }
}