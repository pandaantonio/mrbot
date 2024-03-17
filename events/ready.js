const { Client } = require("discord.js");

module.exports = class {
    static name = "ready";

    /**
     * 
     * @param {Client} bot 
     */
    static run = async (bot) => {
        console.log(`${bot.user.username} is online!`);
    }
}