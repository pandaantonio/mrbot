const { ChatInputCommandInteraction } = require("discord.js"),
    { FastType } = require("discord-gamecord");

class Command {
    static name = "play fasttype";

    /**
     * 
     * @param {ChatInputCommandInteraction} int 
     */
    static async run(int) {
        await int.deferReply();

        new FastType({
            message: int,
            isSlashGame: true,
            embed: {
                title: 'Tipo rápido',
                color: '#5865F2',
                description: 'Você tem {time} segundos para digitar a frase abaixo.'
            },
            timeoutTime: 60000,
            sentence: 'Algumas frases muito legais para digitar rapidamente.',
            winMessage: 'Você ganhou! Você terminou o tipo corrida em {time} segundos com ppm de {ppm}.',
            loseMessage: 'Você perdeu! Você não digitou a frase correta a tempo.',
        }).startGame();
    }
};

module.exports = new Command();