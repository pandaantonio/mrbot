module.exports = class Command {
    static name = "send message";

    static run = async function (interaction) {
        let content = interaction.options.getString("content");

        interaction.editReply(content);
    }
}