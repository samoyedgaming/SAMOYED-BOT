const {
    Client,
    Intents,
    MessageEmbed,
    Collection,
    MessageAttachment,
    MessageActionRow,
    MessageButton
  } = require("discord.js");
  module.exports = {
    name: "ready",
  
    run(client, msg) {
        const {
            GiveawaysManager
          } = require('discord-giveaways');
          // Starts updating currents giveaways
          const manager = new GiveawaysManager(client, {
            storage: './giveaways.json',
            default: {
              botsCanWin: false,
              embedColor: '#FF0000',
              embedColorEnd: '#000000',
              reaction: '🎉'
            }
          });
          // We now have a giveawaysManager property to access the manager everywhere!
          client.giveawaysManager = manager;
          client.on('interactionCreate', async interaction => {
            if (!interaction.isCommand()) return;
          
            if (interaction.commandName === 'giveway') {
              if (interaction.options.getSubcommand() === 'start') {
          
              let permissions = interaction.member.permissions.has("MODERATE_MEMBERS")
              if (!permissions) return interaction.reply("Nie masz permisji do użycia tej komendy!")
          
              const ms = require('ms');
              const duration = interaction.options.getString('czas');
              const winnerCount = interaction.options.getInteger('wygrani');
              const prize = interaction.options.getString('nagroda');
              client.giveawaysManager.start(interaction.channel, {
                  duration: ms(duration),
                  winnerCount,
                  prize
              }).then((gData) => {
                  console.log(gData); // {...} (messageId, end date and more)
              });
              }
            }
          })
          client.on('interactionCreate', async interaction => {
            if (!interaction.isCommand()) return;
            if (interaction.commandName === 'giveway') {
              if (interaction.options.getSubcommand() === 'reroll') {
          
              let permissions = interaction.member.permissions.has("MODERATE_MEMBERS")
              if (!permissions) return interaction.reply("Nie masz permisji do użycia tej komendy!")
          
              const messageId = interaction.options.getString('it');
              client.giveawaysManager.reroll(messageId).then(() => {
                  interaction.channel.send('Brawo! Przerolowano giveway!');
              }).catch((err) => {
                  interaction.channel.send(`Wystąpił problem.\n\`${err}\``);
              });
            }
            }
          })
          client.on('interactionCreate', async interaction => {
            if (!interaction.isCommand()) return;
            if (interaction.commandName === 'giveway') {
              if (interaction.options.getSubcommand() === 'koniec') {
          
              let permissions = interaction.member.permissions.has("MODERATE_MEMBERS")
              if (!permissions) return interaction.reply("Nie masz permisji do użycia tej komendy!")
          
              const messageId = interaction.options.getString('id');
              client.giveawaysManager.end(messageId).then(() => {
                  interaction.channel.send('Brawo! Zakończono giveway!');
              }).catch((err) => {
                  interaction.channel.send(`Wystąpił problem.\n\`${err}\``);
              });
              }
            }
          })
    }
}