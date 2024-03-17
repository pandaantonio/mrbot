const { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");

module.exports = class Command {
    static name = "send";
    
    static data = new SlashCommandBuilder()
        .setName("send")
        .setNameLocalizations({
            "pt-BR": "enviar"
        })
        .setDescription("Send a Personalized Message.")
        .setDescriptionLocalizations({
            "pt-BR": "Envie uma mensagem personalizada."
        })
        .addSubcommand(
            (sub) => sub.setName("message")
                .setNameLocalizations({
                    "pt-BR": "mensagem"
                })
                .setDescription("Send a Personalized Message.")
                .setDescriptionLocalizations({
                    "pt-BR": "Envie uma mensagem personalizada."
                })
                .addStringOption(
                    (op) => op.setName("content")
                        .setNameLocalizations({
                            "pt-BR": "conteúdo"
                        })
                        .setDescription("This is the content of the message.")
                        .setDescriptionLocalizations({
                            "pt-BR": "Este é o conteúdo da mensagem."
                        })
                        .setRequired(true)
                )
        )
        .addSubcommand(
            (sub) => sub.setName("embed")
                .setDescription("Send a custom embed.")
                .setDescriptionLocalizations({
                    "pt-BR": "Envie uma embed personalizada."
                })
                .addStringOption(
                    (op) => op.setName("title")
                        .setNameLocalizations({
                            "pt-BR": "título"
                        })
                        .setDescription("This is the title of the embed.")
                        .setDescriptionLocalizations({
                            "pt-BR": "Este é o título do embed."
                        })
                        .setRequired(true)
                )
                .addStringOption(
                    (op) => op.setName("description")
                        .setNameLocalizations({
                            "pt-BR": "descrição"
                        })
                        .setDescription("This is the description of the embed.")
                        .setDescriptionLocalizations({
                            "pt-BR": "Esta é a descrição do embed."
                        })
                        .setRequired(true)
                )
                .addStringOption(
                    (op) => op.setName("color")
                        .setNameLocalizations({
                            "pt-BR": "cor"
                        })
                        .setDescription("This is the color of the embed.")
                        .setDescriptionLocalizations({
                            "pt-BR": "Esta é a cor do embed."
                        })
                        .setRequired(false)
                )
                .addStringOption(
                    (op) => op.setName("content")
                        .setNameLocalizations({
                            "pt-BR": "conteúdo"
                        })
                        .setDescription("This is the content of the message.")
                        .setDescriptionLocalizations({
                            "pt-BR": "Este é o conteúdo da mensagem."
                        })
                        .setRequired(false)
                )
                .addStringOption(
                    (op) => op.setName("image")
                        .setDescription("This is the image of the embed.")
                        .setDescriptionLocalizations({
                            "pt-BR": "Esta é a imagem do embed."
                        })
                        .setRequired(false)
                )
                .addStringOption(
                    (op) => op.setName("thumbnail")
                        .setDescription("This is the thumbnail of the embed.")
                        .setDescriptionLocalizations({
                            "pt-BR": "Esta é a thumbnail do embed."
                        })
                        .setRequired(false)
                )
        );
};