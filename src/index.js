const { Client, IntentsBitField } = require('discord.js'),
    eventHandler = require('./handlers/eventHandler'),
    bot = new Client({
        intents: [
            IntentsBitField.Flags.Guilds,
            IntentsBitField.Flags.GuildMessages,
        ],
    });

eventHandler(bot);

module.exports = bot;