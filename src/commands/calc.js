const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");
const math = require("mathjs");

module.exports = class {
    static name = "calc";

    /**
     * 
     * @param {ChatInputCommandInteraction} int 
     */
    static async run(int) {
        await int.deferReply();

        try {
            const res = math.evaluate(int.options.getString("expression"));

            int.editReply(`\`\`\`${res}\`\`\``);
        } catch (err) {
            int.editReply(`\`\`\`${err}\`\`\``);
        }
    }

    static data = new SlashCommandBuilder()
        .setName("calc")
        .setDescription("Use the calculator on discord.")
        .setDescriptionLocalizations({
            "pt-BR": "Use a calculadora no discord.",
            "es-ES": "Usa la calculadora en discordia."
        })
        .addStringOption(
            (op) => op.setName("expression")
                .setNameLocalizations({
                    "pt-BR": "expressão"
                })
                .setRequired(true)
                .setDescription("Math Expression.")
                .setDescriptionLocalizations({
                    "pt-BR": "Expressão Matemática."
                })
        )
};