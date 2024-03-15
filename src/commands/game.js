const { SlashCommandBuilder, ChatInputCommandInteraction } = require("discord.js");
const { TicTacToe } = require("discord-gamecord");

module.exports = class Command {
    /**
     * 
     * @param {ChatInputCommandInteraction} int 
     */
    async play_tictactoe(int) {
        await int.deferReply();

        new TicTacToe({
            buttons: {
                accept: 'Aceitar',
                reject: 'Rejeitar'
            },
            message: int,
            isSlashGame: true,
            opponent: int.options.getMember("opponent"),
            embed: {
                title: 'Jogo da velha',
                color: '#5865F2',
                statusTitle: 'Status',
                overTitle: 'Fim de jogo'
            },
            emojis: {
                xButton: '❌',
                oButton: '🔵',
                blankButton: '➖'
            },
            mentionUser: true,
            timeoutTime: 60000,
            xButtonStyle: 'DANGER',
            oButtonStyle: 'PRIMARY',
            turnMessage: '{emoji} | É a vez do jogador **{player}**.',
            winMessage: '{emoji} | **{player}** ganhou o jogo da velha',
            tieMessage: 'O jogo empatou! (Ninguém ganhou o jogo)',
            timeoutMessage: 'O jogo foi finalizado! (Ninguém ganhou o jogo)',
            playerOnlyMessage: 'Apenas {player} e {opponent} podem usar estes botões.',
            requestMessage: '{player} convidou você para uma rodada de jogo.',
            rejectMessage: 'O jogador negou seu pedido de uma rodada de jogo.',
            reqTimeoutMessage: 'Abandonou o jogo porque o jogador não respondeu.'
        }).startGame();
    }

    data = new SlashCommandBuilder()
        .setName("play")
        .setNameLocalizations({
            "pt-BR": "iniciar"
        })
        .setDescription("Let's Play?")
        .setDescriptionLocalizations({
            "pt-BR": "Vamos iniciar?"
        })
        .addSubcommand(
            (sub) => sub.setName("tictactoe")
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