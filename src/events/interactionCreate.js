const { ChatInputCommandInteraction } = require("discord.js");

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

        console.log(name);
    }
};