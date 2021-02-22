const axios =  require('axios')

const { corona_api } = require(__dirname + "/../Config/config.js")

module.exports = (client) => {

    const instance = axios.create({
        baseUrl: corona_api,
    })

    client.axios = instance
}