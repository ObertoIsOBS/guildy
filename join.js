const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (message.author.id !== "537808581496537108") return;
    client.emit("guildMemberAdd", message.member);

}
