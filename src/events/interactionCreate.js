const getCommands = require("../utils/getCommands"),
    { ChatInputCommandInteraction } = require("discord.js"),
    commands = getCommands();

module.exports = {
    name: "interactionCreate",

    /**
     * 
     * @param {ChatInputCommandInteraction} int 
     * @returns 
     */
    run: async (int) => {
        if (!int.isChatInputCommand()) return;

        const lang = require("../locales/pt-BR.json");
        const { _subcommand, _group } = int.options;
        const command = commands.find((c) => c.name === `${int.commandName}${_group ? ` ${_group}` : ""}${_subcommand ? ` ${_subcommand}` : ""}`)

        if (command) {
            await command.run(int);
        }
    }
}