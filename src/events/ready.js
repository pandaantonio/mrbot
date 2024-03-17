module.exports = class Event {
    static name = "ready";

    /**
     * 
     * @param {Client} client 
     */
    static run = async function (client) {
        console.log(`${client.user.tag} is online!`);
    }
};