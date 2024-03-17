require("dotenv/config");
const { Client, IntentsBitField } = require('discord.js');
const { globSync } = require("glob");
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
    ],
});

const eventFiles = globSync("src/events/**/*.js");

for (file of eventFiles) {
    const event = require(`${__dirname}\\${file}`);

    client.on(event.name, async (...args) => await event.run(...args));
}

client.login(process.env.TOKEN);