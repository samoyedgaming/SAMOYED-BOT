const dotenv = require('dotenv').config()
const { Client } = require('discord.js')
const client = new Client({ partials: ["MESSAGE", "REACTION"] })
const { Permissions: { FLAGS }, MessageEmbed } = require("discord.js")

module.exports = {
    token: process.env.token,
    prefix: "/",
    owner: "622714126841675778",
    corona_api: "https://disease.sh/v3/covid-19",
}