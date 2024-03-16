require("dotenv/config");

const { Client, IntentsBitField, Collection, REST, Routes } = require('discord.js');
const { glob } = require("glob");
const bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
    ],
});

bot.commands = new Collection();

bot.once("ready", async () => {
    const events = await glob("src/events/**/*.js");
    const commands = await glob("src/commands/**/*.js");

    for (const evt of events) {
        const event = require(`${__dirname}\\${evt}`)

        bot.on(event.name, async (...args) => await event.run(...args));
    }

    for(const cmd of commands){
        const command = require(`${__dirname}\\${cmd}`);

        bot.commands.set(command.name ?? command.data.name, command);
    }
});

bot.login(process.env.TOKEN);