const { ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");

module.exports = class Command {
    static name = "send embed";

    /**
     * 
     * @param {ChatInputCommandInteraction} int 
     */
    static async run(int) {
        await int.deferReply({ ephemeral: false });

        const title = int.options.getString("title"),
            description = int.options.getString("description"),
            color = int.options.getString("color") || "Random",
            image = int.options.getString("image"),
            thumbnail = int.options.getString("thumbnail"),
            content = int.options.getString("content") || " ";

        let embed = new EmbedBuilder()
            .setColor(color)
            .setTitle(title)
            .setDescription(description)

        if (image) embed.setImage(image);
        if (thumbnail) embed.setThumbnail(thumbnail);

        int.editReply({ content, embeds: [embed] });
    }
};