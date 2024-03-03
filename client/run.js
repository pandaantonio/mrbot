require("dotenv/config");

const bot = require("./index");

bot.login(process.env.TOKEN);