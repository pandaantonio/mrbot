const { Client, IntentsBitField } = require('discord.js'),
    eventHandler = require('./handlers/eventHandler'),
    bot = new Client({
        intents: [
            IntentsBitField.Flags.Guilds,
        ],
    });

eventHandler(bot);

module.exports = bot;