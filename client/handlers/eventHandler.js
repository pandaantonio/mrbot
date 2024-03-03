const { join } = require('path'),
    getAllFiles = require('../utils/getAllFiles');

module.exports = (bot) => {
    const files = getAllFiles(join(__dirname, '..', 'events'), true);

    for (const file of files) {
        const event = require(file);

        bot.on(event.name, (...args) => event.run(...args));
    }
};