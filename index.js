require("dotenv/config");

const { Client, IntentsBitField } = require('discord.js');
const { promisify } = require("util")
const { glob } = require("glob");
const pg = promisify(glob);
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
    ],
});

client.login(process.env.TOKEN).then(async () => {
    const eventFiles = await pg("src/events/**/*.js");
    console.log(eventFiles);

    for(const file of eventFiles){
        const event = require(`${__dirname}\\${file}`);

        client.on(event.name, async (...args) => await event.run(...args));
    }
});