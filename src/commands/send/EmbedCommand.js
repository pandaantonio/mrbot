const { EmbedBuilder } = require("discord.js");

module.exports = class Command {
    static name = "send embed";

    static run = async function (interaction) {
        const title = interaction.options.getString("title"),
            description = interaction.options.getString("description"),
            color = interaction.options.getString("color") || "Random",
            image = interaction.options.getString("image"),
            thumbnail = interaction.options.getString("thumbnail"),
            content = interaction.options.getString("content") || " ";

        let embed = new EmbedBuilder()
            .setColor(color)
            .setTitle(title)
            .setDescription(description)

        if (image) embed.setImage(image);
        if (thumbnail) embed.setThumbnail(thumbnail);

        interaction.editReply({ content, embeds: [embed] });
    }
};