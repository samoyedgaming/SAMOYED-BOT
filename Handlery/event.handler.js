module.exports = (client) => {
  const { readdirSync, existsSync } = require("fs");
  const chalk = require("chalk");
  const {
    Constants: { Events },
  } = require("discord.js");

  const serverEvents = Object.values(Events);

  const serverEventsPath = __dirname + `/../Eventy`;

  module.exports = (client) => {
    try {
      if (!existsSync(serverEventsPath)) {
        console.log(
          chalk.yellow("Brakuje folderu Eventy. Tworzenie folderu...")
        );
        mkdirSync(serverEventsPath);
      }
    } catch (e) {
      console.log("Błąd" + e);
      process.exit(1);
    }
  };

  const events = readdirSync(__dirname + "/../Eventy").filter((file) =>
    file.endsWith("event.js")
  );

  let registeredEventsCount = 0;

  for (const file of events) {
    const event = require(__dirname + `/../Eventy/${file}`);

    if (!event.run) {
      console.log(chalk.red`Event '${file}' brakuje: run()`);
    } else if (typeof event.run !== "function") {
      console.log(`Event ${file} potrzebuje funkcji 'run'`);
    }
    if (serverEvents.includes(event.name)) {
      client.on(event.name, event.run);
      registeredEventsCount++;
    } else {
      console.log(
        chalk.red(`Nie ma eventu o nazwie ${event.name} w pliku ${file} `)
      );
    }

    console.log(
      chalk.blue(`Zarejestrowano ${registeredEventsCount} event/ów)`)
    );
  }
};
