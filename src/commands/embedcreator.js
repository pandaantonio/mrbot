const { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");

module.exports = class Command {
    /**
     * 
     * @param {ChatInputCommandInteraction} int 
     */
    async embedcreator(int) {
        await int.deferReply({ ephemeral: false });

        const title = int.options.getString("title"),
            description = int.options.getString("description"),
            image = int.options.getString("image"),
            thumbnail = int.options.getString("thumbnail"),
            content = int.options.getString("content");

        let embed = new EmbedBuilder()
            .setColor("Random")
            .setTitle(title)
            .setDescription(description)

        if (image && image.startsWith('http')) embed.setImage(image);
        if (thumbnail && thumbnail.startsWith('http')) embed.setThumbnail(thumbnail);

        int.editReply({ content, embeds: [embed] });
    }

    data = new SlashCommandBuilder()
        .setName("embedcreator")
        .setDescription("This creates a custom embed.")
        .addStringOption((op) => op.setName("title").setDescription("This is the title of the embed.").setRequired(true))
        .addStringOption((op) => op.setName("description").setDescription("This is the description of the embed.").setRequired(true))
        .addStringOption((op) => op.setName("content").setDescription("This is the content of the message.").setRequired(false))
        .addStringOption((op) => op.setName("image").setDescription("This is the image of the embed.").setRequired(false))
        .addStringOption((op) => op.setName("thumbnail").setDescription("This is the thumbnail of the embed.").setRequired(false));
};