const { ChatInputCommandInteraction } = require("discord.js");
const getCommands = require("../utils/getCommands");

module.exports = class Event {
    static name = "interactionCreate";

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    static run = async function(interaction){
        if(!interaction.isChatInputCommand()) return;

        let name = interaction.commandName;

        if(interaction.options?._group) name += " " + interaction.options?._group;
        if(interaction.options?._subcommand) name += " " + interaction.options?._subcommand;

        let commands = getCommands();
        let command = commands.find((c) => c.name === name);

        if(command) await command.run(interaction);
    }
};