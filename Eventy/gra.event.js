// const {
//     Client,
//     Intents,
//     MessageEmbed,
//     Collection,
//     MessageAttachment,
//     MessageActionRow,
//     MessageButton
// } = require("discord.js");
// module.exports = {
//     name: "ready",

//     run(client, msg) {

//         //wiadomosc trzecia

//         client.channels.cache.get("920985572745555969").messages.fetch("960174129938595881").then(msg => {
//             let ifilter = i => !i.user.bot;

//             const collector = msg.createMessageComponentCollector({
//                 filter: ifilter
//             })

//             collector.on("collect", async i => {

//                 if (i.customId === "s") {
//                     if (!i.member.roles.cache.has("924378347562237952")) {
//                         await i.member.roles.add("924378347562237952")
//                         i.reply({
//                             content: "Otrzymano rolę <@&924378347562237952>",
//                             ephemeral: true
//                         })
//                     } else {
//                         await i.member.roles.remove("924378347562237952")
//                         i.reply({
//                             content: "Usunięto rolę <@&924378347562237952>",
//                             ephemeral: true
//                         })
//                     }
//                 }
//                 if (i.customId === "m") {
//                     if (!i.member.roles.cache.has("920985548238233620")) {
//                         await i.member.roles.add("920985548238233620")
//                         i.reply({
//                             content: "Otrzymano rolę <@&920985548238233620>",
//                             ephemeral: true
//                         })
//                     } else {
//                         await i.member.roles.remove("920985548238233620")
//                         i.reply({
//                             content: "Usunięto rolę <@&920985548238233620>",
//                             ephemeral: true
//                         })
//                     }
//                 }
//                 if (i.customId === "gta") {
//                     if (!i.member.roles.cache.has("920985549509111879")) {
//                         await i.member.roles.add("920985549509111879")
//                         i.reply({
//                             content: "Otrzymano rolę <@&920985549509111879>",
//                             ephemeral: true
//                         })
//                     } else {
//                         await i.member.roles.remove("920985549509111879")
//                         i.reply({
//                             content: "Usunięto rolę <@&920985549509111879>",
//                             ephemeral: true
//                         })
//                     }
//                 }
//                 if (i.customId === "cs") {
//                     if (!i.member.roles.cache.has("920985551442681867")) {
//                         await i.member.roles.add("920985551442681867")
//                         i.reply({
//                             content: "Otrzymano rolę <@&920985551442681867>",
//                             ephemeral: true
//                         })
//                     } else {
//                         await i.member.roles.remove("920985551442681867")
//                         i.reply({
//                             content: "Usunięto rolę <@&920985551442681867>",
//                             ephemeral: true
//                         })
//                     }
//                 }
//             })
//         })
//     }
// }