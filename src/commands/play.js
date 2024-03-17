const { SlashCommandBuilder } = require("discord.js");
const { TwoZeroFourEight, FastType, FindEmoji, Minesweeper, Snake, TicTacToe } = require("discord-gamecord");

module.exports = {
    run: async ({ interaction }) => {
        await interaction.deferReply();

        const subcommand = interaction.options.getSubcommand();

        if (subcommand === "2048") {
            new TwoZeroFourEight({
                message: interaction,
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

        else if (subcommand === "fasttype") {
            new FastType({
                message: interaction,
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

        else if (subcommand === "findemoji") {
            new FindEmoji({
                message: interaction,
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

        else if (subcommand === "minesweeper") {
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

        else if (subcommand === "snake") {
            new Snake({
                message: interaction,
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

        //tictactoe
        else {
            new TicTacToe({
                buttons: {
                    accept: 'Aceitar',
                    reject: 'Rejeitar'
                },
                message: interaction,
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
    },

    data: new SlashCommandBuilder()
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