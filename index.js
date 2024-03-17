require("dotenv/config");

const { Client, IntentsBitField } = require('discord.js');
const { CommandHandler } = require("djs-commander");
const bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
    ],
});

bot.login(process.env.TOKEN);