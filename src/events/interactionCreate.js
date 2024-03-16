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

        let name = int.commandName,
            subcommand = int.options.getSubcommand(),
            group = int.options.getSubcommandGroup();

        if (subcommand && !group) name += ` ${subcommand}`;
        else if (subcommand && group) name += ` ${group} ${subcommand}`;
        else name = int.commandName;

        const command = commands.find((c) => c.name === name);
        const lang = require("../locales/pt-BR.json");

        console.log(name);

        if (!command) return;

        await command.run(int, lang);
    }
}