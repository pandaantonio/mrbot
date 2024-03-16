const { ChatInputCommandInteraction } = require("discord.js");

module.exports = class Command {
    static name = "send message";

    /**
     * 
     * @param {ChatInputCommandInteraction} int 
     */
    static async run(int) {
        await int.deferReply();

        let content = int.options.getString("content");

        int.editReply(content);
    }
}
