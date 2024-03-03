require("dotenv/config");

const bot = require("./src");

bot.login(process.env.TOKEN);