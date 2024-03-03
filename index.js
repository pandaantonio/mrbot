require("dotenv/config");

const bot = require("./src/index");

bot.login(process.env.TOKEN);