const { join } = require('path'),
    getAllFiles = require('./getAllFiles');

module.exports = () => {
    const commands = [],
        files = getAllFiles(join(__dirname, '..', 'commands'), true);

    for (const file of files) {
        const command = require(file);

        commands.push(new command());
    }

    return commands;
};