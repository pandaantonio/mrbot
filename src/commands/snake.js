const { ChatInputCommandInteraction } = require("discord.js"),
    { Snake } = require("discord-gamecord");

module.exports = class Command {
    static name = "play snake";

    /**
     * 
     * @param {ChatInputCommandInteraction} int 
     */
    static run = async (int) => {
        await int.deferReply();

        new Snake({
            message: int,
            isSlashGame: true,
            embed: {
                title: 'Jogo Da Cobrinha',
                overTitle: 'Fim de jogo',
                color: '#5865F2'
            },
            emojis: {
                board: '⬛',
                food: '🍎',
                up: '⬆️',
                down: '⬇️',
                left: '⬅️',
                right: '➡️',
            },
            stopButton: 'Stop',
            timeoutTime: 60000,
            snake: { head: '🟢', body: '🟩', tail: '🟢', over: '💀' },
            foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
            playerOnlyMessage: 'Apenas {player} pode usar esses botões.'
        }).startGame();
    }
};