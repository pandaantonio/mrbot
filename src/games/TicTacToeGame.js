const { EmbedBuilder, ActionRowBuilder } = require('discord.js'),
    { disableButtons, formatMessage, ButtonBuilder } = require('../utils/utils'),
    approve = require('../utils/approve');

module.exports = class TicTacToe extends approve {
    constructor(
        options = {
            message, opponent, tieMessage,
            timeoutTime, xButtonStyle, oButtonStyle, turnMessage, winMessage, timeoutMessage, requestMessage, rejectMessage,
            embed: { title, statusTitle, overTitle, color },
            emojis: { xButton, oButton, blankButton }
        }
    ) {
        super(options);
        
        this.options = options;
        this.message = options.message;
        this.opponent = options.opponent;
        this.gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.player1Turn = true;
    }


    async sendMessage(content) {
        return await this.message.editReply(content);
    }


    async startGame() {
        this.message.author = this.message.user;

        const approve = await this.approve();
        if (approve) this.TicTacToeGame(approve);
    }


    async TicTacToeGame(msg) {

        const embed = new EmbedBuilder()
            .setColor(this.options.embed.color)
            .setTitle(this.options.embed.title)
            .setFooter({ text: this.message.author.tag + ' vs ' + this.opponent.tag })
            .addFields({ name: this.options.embed.statusTitle, value: this.getTurnMessage() })

        await msg.edit({ content: null, embeds: [embed], components: this.getComponents() });
        this.handleButtons(msg);
    }


    handleButtons(msg) {
        const collector = msg.createMessageComponentCollector({ idle: this.options.timeoutTime });


        collector.on('collect', async btn => {
            await btn.deferUpdate().catch(e => { });
            if (btn.user.id !== this.message.author.id && btn.user.id !== this.opponent.id) {
                if (this.options.playerOnlyMessage) btn.followUp({ content: formatMessage(this.options, 'playerOnlyMessage'), ephemeral: true });
                return;
            }

            if (btn.user.id !== (this.player1Turn ? this.message.author : this.opponent).id) return;
            this.gameBoard[btn.customId.split('_')[1]] = (this.player1Turn ? 1 : 2);
            if (this.hasWonGame(1) || this.hasWonGame(2) || !this.gameBoard.includes(0)) collector.stop();
            if (this.hasWonGame(1) || this.hasWonGame(2)) return this.gameOver(msg, 'win');
            if (!this.gameBoard.includes(0)) return this.gameOver(msg, 'tie');
            this.player1Turn = !this.player1Turn;


            const embed = new EmbedBuilder()
                .setColor(this.options.embed.color)
                .setTitle(this.options.embed.title)
                .setFooter({ text: this.message.author.tag + ' vs ' + this.opponent.tag })
                .addFields({ name: this.options.embed.statusTitle, value: this.getTurnMessage() })

            return await msg.edit({ embeds: [embed], components: this.getComponents() });
        })


        collector.on('end', async (_, reason) => {
            if (reason === 'idle') return this.gameOver(msg, 'timeout');
        })
    }


    async gameOver(msg, result) {
        const TicTacToeGame = { player: this.message.author, opponent: this.opponent, gameBoard: this.gameBoard };
        if (result === 'win') TicTacToeGame.winner = this.hasWonGame(1) ? this.message.author.id : this.opponent.id;
        this.emit('gameOver', { result: result, ...TicTacToeGame });


        const embed = new EmbedBuilder()
            .setColor(this.options.embed.color)
            .setTitle(this.options.embed.title)
            .setFooter({ text: this.message.author.tag + ' vs ' + this.opponent.tag })
            .addFields({ name: this.options.embed.overTitle, value: this.getTurnMessage(result + 'Message') })

        return await msg.edit({ embeds: [embed], components: disableButtons(this.getComponents()) });
    }


    isGameOver() {
        if (this.hasWonGame(1) || this.hasWonGame(2) || !this.gameBoard.includes(0)) return true;
        return false;
    }


    hasWonGame(player) {
        if (this.gameBoard[0] === this.gameBoard[4] && this.gameBoard[0] === this.gameBoard[8] && this.gameBoard[0] === player) {
            return true;
        } else if (this.gameBoard[6] === this.gameBoard[4] && this.gameBoard[6] === this.gameBoard[2] && this.gameBoard[6] === player) {
            return true;
        }
        for (let i = 0; i < 3; ++i) {
            if (this.gameBoard[i * 3] === this.gameBoard[i * 3 + 1] && this.gameBoard[i * 3] === this.gameBoard[i * 3 + 2] && this.gameBoard[i * 3] === player) {
                return true;
            }
            if (this.gameBoard[i] === this.gameBoard[i + 3] && this.gameBoard[i] === this.gameBoard[i + 6] && this.gameBoard[i] === player) {
                return true;
            }
        }
        return false;
    }


    getPlayerEmoji() {
        return this.player1Turn ? this.options.emojis.xButton : this.options.emojis.oButton;
    }

    getTurnMessage(msg) {
        return this.formatTurnMessage(this.options, (msg ?? 'turnMessage')).replace('{emoji}', this.getPlayerEmoji());
    }


    getButton(btn) {
        if (btn === 1) return { emoji: this.options.emojis.xButton, style: this.options.xButtonStyle };
        else if (btn === 2) return { emoji: this.options.emojis.oButton, style: this.options.oButtonStyle };
        else return { emoji: this.options.emojis.blankButton, style: 'SECONDARY' };
    }


    getComponents() {
        const components = [];

        for (let x = 0; x < 3; x++) {
            const row = new ActionRowBuilder();
            for (let y = 0; y < 3; y++) {

                const button = this.getButton(this.gameBoard[y * 3 + x]);
                const btn = new ButtonBuilder().setEmoji(button.emoji).setStyle(button.style).setCustomId('TicTacToe_' + (y * 3 + x));
                if (this.gameBoard[y * 3 + x] !== 0) btn.setDisabled(true);
                row.addComponents(btn);
            }
            components.push(row);
        }
        return components;
    }
}