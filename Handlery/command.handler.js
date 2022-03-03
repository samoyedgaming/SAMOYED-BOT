const {
  Collection,
  MessageEmbed
} = require("discord.js");

const {
  readdirSync
} = require("fs");

const {
  prefix,
  owner
} = require(__dirname + "/../Config/config.js");

const ascil = require("ascii-table");
const {
  cooldown
} = require("../Komendy/Slash-Komendy/Komenda-Slash-Usun.js");

const table = new ascil().setHeading("Komenda", "Status");

const botauthor = "Samoyed Franek#9264";

const botversion = "v1.0 beta";

const botname = "Samoyed Bot";

module.exports = (client) => {
  client.commands = new Collection();

  const cooldowns = new Collection();

  const commandfiles = readdirSync(__dirname + "/../Komendy").filter((file) =>
    file.startsWith("Komenda-")
  );

  for (const file of commandfiles) {
    const command = require(__dirname + `/../Komendy/${file}`);

    if (command.name) {
      client.commands.set(command.name, command);
      table.addRow(file, "✅");
    } else {
      table.addRow(file, "❌  -> Brakująca 'Nazwa'!");
      continue;
    }
  }

  const slashcommandfiles = readdirSync(__dirname + "/../Komendy/Slash-Komendy").filter((file) =>
  file.startsWith("Komenda-Slash")
);
table.addRow("------------Slash------------","-----------------------------")
for (const file of slashcommandfiles) {
  const command = require(__dirname + `/../Komendy/Slash-Komendy/${file}`);

  if (command.name) {
    client.commands.set(command.name, command);
    table.addRow(file, "✅");
  } else {
    table.addRow(file, "✅");
    continue;
  }
}
console.log(table.toString());

  client.on("messageCreate", async (msg) => {
    const {
      author,
      guild,
      channel
    } = msg;

    // Sprawdza czy to bot czy człowiek i czy pisze na dm czy na serwie
    if (author.bot) {
      return;
    }

    // Ignoruje wiadomości bez prefixu
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);

    const cmdName = args.shift().toLowerCase();

    const cmd =
      client.commands.get(cmdName) ||
      client.commands.find(
        (cmd) => cmd.aliases && cmd.aliases.includes(cmdName)
      );
    if (!cmd) return;

    if (cmd.guildOnly && !guild) {
      const embed = new MessageEmbed()
        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription(`Nie można używać komend na DM.`);

      return channel.send({
        embeds: [embed]
      });
    }

    if (cmd.ownerOnly) {
      if (author.id !== owner) {
        const embed = new MessageEmbed()
          .setTitle(botname)
          .setColor(0xb65307)
          .setDescription(`Ta komenda jest dostępna tylko dla właściciela`);

        return channel.send({
          embeds: [embed]
        });
      }
    }

    //Sprawdza permisje
    if (cmd.userPermissions && cmd.userPermissions.length) {
      if (!msg.member.permissionsIn(channel).has(cmd.userPermissions)) {
        const embed = new MessageEmbed()
          .setTitle(botname)
          .setColor(0xb65307)
          .setDescription(`Nie masz wymaganej permisji do używania tej komendy`);

        return channel.send({
          embeds: [embed]
        });
      }
    }

    if (cmd.args && !args.lenght) {
      const embed = new MessageEmbed()
        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription(
          `Nie podałeś argumentu. Poprawne użycie komendy: ${prefix}${cmdName} ${cmd.usage}.`,
          false
        );

      return channel.send({
        embeds: [embed]
      });
    }
    // Cool down
    if (!cooldowns.has(cmdName)) {
      cooldowns.set(cmdName, new Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(cmdName);
    const cooldownAmount = (cmd.cooldown || 3) * 1000;

    if (timestamps.has(msg.author.id)) {
      const expirationTime = timestamps.get(msg.author.id) + cooldownAmount;

      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        const embed = new MessageEmbed()
          .setTitle(botname)
          .setColor(0xb65307)
          .setDescription(
            `Proszę czekać ${timeLeft.toFixed(
              0
            )} sekund zanim użyjesz komendy \`${prefix}${cmdName}\` ponownie.`
          );

        return channel.send({
          embeds: [embed]
        });
      }
    }

    timestamps.set(msg.author.id, now);
    setTimeout(() => timestamps.delete(msg.author.id), cooldownAmount);
    try {
      cmd.run(msg, args);
    } catch (err) {
      console.log(err);

      const embed = new MessageEmbed()
        .setTitle(botname)
        .setColor(0xb65307)
        .setDescription(`Wystąpił problem spróbuj ponownie póżniej.`);

      channel.send({
        embeds: [embed]
      });
    }
  });
};