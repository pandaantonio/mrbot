const { SlashCommandBuilder, ChatInputCommandInteraction } = require("discord.js");
const math = require("mathjs");

module.exports = {
    data: new SlashCommandBuilder()
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
        ),

    run: async ({ interaction }) => {
        await interaction.deferReply();

        try {
            const res = math.evaluate(interaction.options.getString("expression"));

            interaction.editReply(`\`\`\`${res}\`\`\``);
        } catch (err) {
            interaction.editReply(`\`\`\`${err}\`\`\``);
        }
    }
};