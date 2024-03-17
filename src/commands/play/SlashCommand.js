const { SlashCommandBuilder } = require("discord.js");

module.exports = class Command {
    static name = "play";

    static data = new SlashCommandBuilder()
        .setName("play")
        .setNameLocalizations({
            "pt-BR": "jogar"
        })
        .setDescription("Let's Play?")
        .setDescriptionLocalizations({
            "pt-BR": "Vamos iniciar?"
        })
        .addSubcommand(
            (sub) => sub
                .setName("minesweeper")
                .setNameLocalizations({
                    "pt-BR": "campominado"
                })
                .setDescription("Play the game minesweeper on discord.")
                .setDescriptionLocalizations({
                    "pt-BR": "Jogue o jogo da caça minas no discord."
                })
        )
        .addSubcommand(
            (sub) => sub
                .setName("findemoji")
                .setNameLocalizations({
                    "pt-BR": "encontreoemoji"
                })
                .setDescription("Play the game find emoji on discord.")
                .setDescriptionLocalizations({
                    "pt-BR": "Jogue o jogo da encontre o emoji no discord."
                })
        )
        .addSubcommand(
            (sub) => sub
                .setName("fasttype")
                .setNameLocalizations({
                    "pt-BR": "escrevarápido"
                })
                .setDescription("Play the game find emoji on discord.")
                .setDescriptionLocalizations({
                    "pt-BR": "Jogue o jogo da tipo rápido no discord."
                })
        )
        .addSubcommand(
            (sub) => sub
                .setName("2048")
                .setDescription("Play the game 2048 on discord.")
                .setDescriptionLocalizations({
                    "pt-BR": "Jogue o jogo da 2048 no discord."
                })
        )
        .addSubcommand(
            (sub) => sub
                .setName("snake")
                .setDescription("Play the snake game on discord.")
                .setNameLocalizations({
                    "pt-BR": "cobrinha"
                })
                .setDescriptionLocalizations({
                    "pt-BR": "Jogue o jogo da cobra no discord."
                })
        )
        .addSubcommand(
            (sub) => sub
                .setName("tictactoe")
                .setNameLocalizations({
                    "pt-BR": "jogodavelha"
                })
                .setDescription("Play tic-tac-toe on discord.")
                .setDescriptionLocalizations({
                    "pt-BR": "Jogue jogo da velha no discord"
                })
                .addUserOption(
                    (user) => user.setName("opponent")
                        .setNameLocalizations({
                            "pt-BR": "adversário"
                        })
                        .setDescription("Choose a opponent.")
                        .setDescriptionLocalizations({
                            "pt-BR": "Escolha um adversário."
                        })
                        .setRequired(true)
                )
        )
};