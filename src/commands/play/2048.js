module.exports = class Command {
    static name = "play 2048";

    static async run(int) {
        new TwoZeroFourEight({
            message: int,
            isSlashGame: true,
            embed: {
                title: '2048',
                color: '#5865F2'
            },
            emojis: {
                up: '⬆️',
                down: '⬇️',
                left: '⬅️',
                right: '➡️',
            },
            timeoutTime: 60000,
            buttonStyle: 'PRIMARY',
            playerOnlyMessage: 'Apenas {player} pode usar esses botões.'
        }).startGame();
    }
};