const { Routes, REST } = require("discord.js");
const getCommands = require("../utils/getCommands");
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

module.exports = class Event {
    static name = "ready";

    /**
     * 
     * @param {Client} client 
     */
    static run = async function (client) {
        console.log(`${client.user.tag} is online!`);

        const commands = getCommands().map((c) => c.data);

        try {
            console.log('Started refreshing application (/) commands.');

            await rest.put(Routes.applicationCommands(client.user.id), { body: commands });

            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    }
};