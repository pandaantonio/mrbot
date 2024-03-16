const { ChatInputCommandInteraction } = require("discord.js"),
    { FindEmoji } = require("discord-gamecord");

class Command {
    static name = "play findemoji";

    /**
     * 
     * @param {ChatInputCommandInteraction} int 
     */
    static async run(int) {
        await int.deferReply();

        new FindEmoji({
            message: int,
            isSlashGame: true,
            embed: {
                title: 'Encontre o emoji',
                color: '#5865F2',
                description: 'Lembre-se dos emojis do quadro abaixo.',
                findDescription: 'Encontre o emoji {emoji} antes que o tempo acabe.'
            },
            timeoutTime: 60000,
            hideEmojiTime: 5000,
            buttonStyle: 'PRIMARY',
            emojis: ['🍉', '🍇', '🍊', '🍋', '🥭', '🍎', '🍏', '🥝'],
            winMessage: 'Você ganhou! Você selecionou o emoji correto. {emoji}',
            loseMessage: 'Você perdeu! Você selecionou o emoji errado. {emoji}',
            timeoutMessage: 'Você perdeu! Acabou seu tempo. O emoji é {emoji}',
            playerOnlyMessage: 'Apenas {player} pode usar esses botões.'
        }).startGame();
    }
};

module.exports = new Command();