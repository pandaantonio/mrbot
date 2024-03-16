const { ChatInputCommandInteraction } = require("discord.js"),
    { TicTacToe } = require("discord-gamecord");

class Command {
    static name = "play tictactoe";

    /**
     * 
     * @param {ChatInputCommandInteraction} int 
     */
    static async run(int) {
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
};

module.exports = new Command();