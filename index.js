require("dotenv/config");

const bot = require("./client/index");

bot.login(process.env.TOKEN);