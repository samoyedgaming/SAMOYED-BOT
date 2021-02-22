const { Collection } = require("discord.js")
const { readdirSync, readdirFileSync, writeFileSync, readFileSync } = require("fs")
const yaml = require('js-yaml');


const serverConfigPath = "/Config/servers"

module.exports = (client) => {
    client.settings = new Collection

    const settingsFiles = readdirSync( __dirname  + `/..${serverConfigPath}`).filter(file => file.endsWith(".yaml"))
    
    
    try {
        for(const file of settingsFiles) {
            const settingsFiles = readFileSync(__dirname + `..${serverConfigPath}/${file}`, "utf8")

            const data = yaml.safeload(settingsFiles)
            const guildid = file.split(".")[0]
// Ustaw Ustawienia Serwera xD
            client.settings.set(guildid, data)
        }
    }catch(e) {
        console.log(e)
    }
    client.saveConfig = guildid => {
        if (client.settings.has(guildid)) {
            const config = client.settings.get(guildid)

            try{
                const yamlStr = yaml.safeDump(config)

                writeFileSync(__dirname + `/..${serverConfigPath}/${guildid}.yaml`, yamlStr, "utf8")
            }catch (e) {

            }
        }
    } 
}