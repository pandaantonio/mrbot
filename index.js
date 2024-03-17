require("dotenv/config");

const { Client, IntentsBitField } = require('discord.js');
const { glob } = require("glob");
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
    ],
});

client.login(process.env.TOKEN).then(async () => {
    const eventFiles = await glob("src/events/**/*.js");

    console.log(eventFiles);
});