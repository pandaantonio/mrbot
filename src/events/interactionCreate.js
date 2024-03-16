const getCommands = require("../utils/getCommands"),
    { ChatInputCommandInteraction } = require("discord.js"),
    commands = getCommands();

module.exports = class Event {
    static name = "interactionCreate";

    /**
     * 
     * @param {ChatInputCommandInteraction} int 
     * @returns 
     */
    static run = async (int) => {
        if (!int.isChatInputCommand()) return;

        const command = commands.find((c) => c.name === int.commandName);
        const lang = require("../locales/pt-BR.json");

        console.log(name);

        if (!command) return;

        await command.run(int, lang);
    }
}