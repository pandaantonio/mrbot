require("dotenv/config");

const { Client, IntentsBitField } = require('discord.js');
const { join } = require("path");
const { CommandHandler } = require("djs-commander");
const bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
    ],
});

new CommandHandler({
    client: bot,
    commandsPath: join(__dirname, "commands"),
});

bot.login(process.env.TOKEN);