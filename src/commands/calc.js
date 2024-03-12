const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");
const math = require("mathjs");

module.exports = class {
    /**
     * 
     * @param {ChatInputCommandInteraction} int 
     */
    async calc(int) {
        await int.deferReply({ ephemeral: false });

        math.evaluate(int.options.getString("expression"))
            .then((res) => {
                int.editReply(`\`\`\`${res}\`\`\``);
            }).catch((err) => {
                int.editReply(`\`\`\`${err}\`\`\``);
            });
    }

    data = new SlashCommandBuilder()
        .setName("calc")
        .setDescription("Use the calculator on discord.")
        .addStringOption((str) => str.setName("expression").setDescription("The Math Expression.").setRequired(true));
};