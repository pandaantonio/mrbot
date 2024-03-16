const { Client, REST, Routes } = require("discord.js"),
    getAllFiles = require("../utils/getAllFiles"),
    { join } = require("path");

module.exports = {
    name: "ready",

    /**
     * 
     * @param {Client} bot 
     */
    run: async (bot) => {
        console.log(`${bot.user.username} is online!`);

        const commands = [],
            rest = new REST({ version: '10' }).setToken(process.env.TOKEN),
            files = getAllFiles(join(__dirname, '..', 'commands'), true);

        for (const file of files) {
            const command = require(file);

            commands.push(command);
        }

        await rest.put(Routes.applicationCommands(bot.user.id), { body: commands.map((c) => c.data) });
    }
}