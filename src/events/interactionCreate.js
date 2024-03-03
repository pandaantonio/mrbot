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

        const command = commands.find((c) => c.data.name === int.commandName);

        if (command) {
            const { _subcommand, _group } = int.options;

            if (_subcommand) await command[`${_subcommand}`](int);
            else if (_group && _subcommand) await command[`${_group}_${_subcommand}`](int);
            else await command.run(int);
        }
    }
}