const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js"),
    math = require("mathjs");

module.exports = class {
    /**
     * 
     * @param {ChatInputCommandInteraction} int 
     */
    async calc(int) {
        await int.deferReply();

        try {
            const res = math.evaluate(int.options.getString("expression"));

            int.editReply(`\`\`\`${res}\`\`\``);
        } catch (err) {
            int.editReply(`\`\`\`${err}\`\`\``);
        }
    }

    data = new SlashCommandBuilder()
        .setName("calc")
        .setDescription("Use the calculator on discord.")
        .setDescriptionLocalizations({
            "pt-BR": "Use a calculadora no discord.",
            "es-ES": "Usa la calculadora en discordia."
        })
        .addStringOption(
            (str) => str.setName("expression")
                .setNameLocalizations({
                    "pt-BR": "expressão",
                    "es-ES": "expresión"
                })
                .setDescription("The Math Expression.")
                .setDescriptionLocalizations({
                    "pt-BR": "A Expressão Matemática.",
                    "es-ES": "La expresión matemática."
                })
                .setRequired(true)
        );
};