require("dotenv/config");

const { Client, IntentsBitField } = require('discord.js');
const { join } = require("path");
const { CommandHandler } = require("djs-commander");
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
    ],
});

new CommandHandler({
    client,
    commandsPath: join(__dirname, "commands"),
    eventsPath: join(__dirname, "events")
});

client.login(process.env.TOKEN);