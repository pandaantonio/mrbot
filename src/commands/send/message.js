const { ChatInputCommandInteraction } = require("discord.js");

module.exports = class {
    static name = "send message";

    /**
     * 
     * @param {ChatInputCommandInteraction} int 
     */
    async run(int) {
        await int.deferReply();

        let content = int.options.getString("content");

        int.editReply(content);
    }
}