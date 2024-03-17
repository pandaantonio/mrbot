const { Minesweeper } = require("discord-gamecord");

module.exports = class Command {
    static name = "play minesweeper";

    static run = async function (interaction) {
        new Minesweeper({
            message: interaction,
            isSlashGame: true,
            embed: {
                title: 'Campo Minado',
                color: '#5865F2',
                description: 'Clique nos botões para revelar os blocos, exceto as minas.'
            },
            emojis: { flag: '🚩', mine: '💣' },
            mines: 5,
            timeoutTime: 60000,
            winMessage: 'Você ganhou o jogo! Você evitou com sucesso todas as minas.',
            loseMessage: 'Você perdeu o jogo! Cuidado com as minas da próxima vez.',
            playerOnlyMessage: 'Apenas {player} pode usar esses botões.'
        }).startGame();
    }
};