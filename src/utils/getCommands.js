const { globSync } = require("glob");

module.exports = () => {
    const commands = [];
    const commandFiles = globSync(`src/commands/**/*.js`);

    for(file of commandFiles){
        const command = require(`${__dirname.replace("src\\utils", "")}${file}`);

        commands.push(command);
    }

    return commands;
};