const {
    SlashCommandBuilder,
    ChatInputCommandInteraction,
} = require("discord.js"),
    { 
        TwoZeroFourEight,
        TicTacToe,
        Connect4
    } = require("discord-gamecord"),
    Lang = require("../locales/pt-BR.json");

module.exports = class Command {
    /**
     * 
     * @param {ChatInputCommandInteraction} int 
     * @param {Lang} lang
     */
    async 2048(int, lang) {
        const Game = new TwoZeroFourEight({
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
            playerOnlyMessage: lang.tzfe,
        });

        Game.startGame();
    }

    /**
     * 
     * @param {ChatInputCommandInteraction} int 
     */
    async connect4(int) {
        const Game = new Connect4({
            message: int,
            isSlashGame: true,
            opponent: int.options.getUser('player'),
            embed: {
                title: 'Connect4 Game',
                statusTitle: 'Status',
                color: '#5865F2'
            },
            emojis: {
                board: '⚪',
                player1: '🔴',
                player2: '🟡'
            },
            mentionUser: true,
            timeoutTime: 60000,
            buttonStyle: 'PRIMARY',
            turnMessage: '{emoji} | Its turn of player **{player}**.',
            winMessage: '{emoji} | **{player}** won the Connect4 Game.',
            tieMessage: 'The Game tied! No one won the Game!',
            timeoutMessage: 'The Game went unfinished! No one won the Game!',
            playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
        });

        Game.startGame();
    }

    /**
     * 
     * @param {ChatInputCommandInteraction} int 
     */
    async ttt(int) {
        const player = int.options.getUser("player");

        if (player.id === int.user.id) {
            int.reply({ ephemeral: true, content: `Você Não Pode Jogar Contra Si Mesmo.` })
        } else if (player.bot === true) {
            int.reply({ ephemeral: true, content: `Você Não Pode Jogar Contra Bots.` });
        } else {
            const Game = new TicTacToe({
                message: int,
                isSlashGame: true,
                opponent: int.options.getUser("player"),
                embed: {
                    title: 'Tic Tac Toe',
                    color: '#5865F2',
                    statusTitle: 'Status',
                    overTitle: 'Game Over'
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
                turnMessage: '{emoji} | Its turn of player **{player}**.',
                winMessage: '{emoji} | **{player}** won the TicTacToe Game.',
                tieMessage: 'The Game tied! No one won the Game!',
                timeoutMessage: 'The Game went unfinished! No one won the Game!',
                playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
            });

            Game.startGame();
        }
    }

    data = new SlashCommandBuilder()
        .setName("game")
        .setNameLocalizations({
            "pt-BR": "jogo"
        })
        .setDescription("Games for You to Play!")
        .addSubcommand(
            (sub) => sub
                .setName("2048")
                .setDescription("Play 2048!")
                .setDescriptionLocalizations({
                    "pt-BR": "Jogue 2048!"
                })
        ).addSubcommand(
            (sub) => sub
                .setName("connect4")
                .setNameLocalizations({
                    "pt-BR": "conectar4"
                })
                .setDescription("Play Connect 4 With Friends!")
                .setDescriptionLocalizations({
                    "pt-BR": "Jogue O Conectar 4 Com Seus Amigos!"
                })
                .addUserOption(
                    (user) => user
                        .setRequired(true)
                        .setName("player")
                        .setNameLocalizations({
                            "pt-BR": "jogador"
                        })
                        .setDescription("Choose A Opponent.")
                        .setDescriptionLocalizations({
                            "pt-BR": "Escolha Um Oponente."
                        })
                )
        ).addSubcommand(
            (sub) => sub
                .setName("ttt")
                .setNameLocalizations({
                    "pt-BR": "jv"
                })
                .setDescription("Play Tic Tac Toe With Friends!")
                .setDescriptionLocalizations({
                    "pt-BR": "Jogue O Jogo Da Velha Com Seus Amigos!"
                })
                .addUserOption(
                    (user) => user
                        .setRequired(true)
                        .setName("player")
                        .setNameLocalizations({
                            "pt-BR": "jogador"
                        })
                        .setDescription("Choose A Opponent.")
                        .setDescriptionLocalizations({
                            "pt-BR": "Escolha Um Oponente."
                        })
                )
        );
}



