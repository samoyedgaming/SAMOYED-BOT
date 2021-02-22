const dotenv = require('dotenv').config()
const { Client } = require('discord.js')
const client = new Client({ partials: ["MESSAGE", "REACTION"] })
const { Permissions: { FLAGS }, MessageEmbed } = require("discord.js")

module.exports = {
    token: process.env.token,
    prefix: "/",
    owner: "622714126841675778",
    corona_api: "https://disease.sh/v3/covid-19",
    rola: 
    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.partial) await reaction.fetch()
      
        const { message } = reaction
        //zmienić rulesmessage id 
        if (message.id === rulesMessageId) {
          const member = message.channel.guild.members.cache.get(user.id)
      
          if (reaction.emoji.name === "👍") {
          member.roles.add(guildRoles.SAMOYED)
          }
       }
      }),
    rolausun: client.on("messageReactionRemove", async (reaction, user) => {
        if (reaction.partial) await reaction.fetch()
      
        const { message } = reaction
        //zmienić rulesmessage id 
        if (message.id === rulesMessageId) {
          const member = message.channel.guild.members.cache.get(user.id)
      
          if (reaction.emoji.name === "👍") {
          member.roles.remove(guildRoles.SAMOYED)
          }
       }
      }),
}