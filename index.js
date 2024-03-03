require("dotenv/config");

module.exports = () => {
    const bot = require("./client/index");

    bot.login(process.env.TOKEN);
}