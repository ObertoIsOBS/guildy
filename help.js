const Discord = require('discord.js');
module.exports.run = (client, message, args) => {

const help = new Discord.RichEmbed()
.setTitle('Help ❓')
.addField('set', 'Used to set settings for things. More information at `/help set`')
.addField('delete', 'Deletes something. More information at `/help delete`')
.addField('new', 'Creates something. More information at `/help new`')
.addField('settings', 'Shows your guilds settings')
.setColor(client.config.gold);

const hSet = new Discord.RichEmbed()
.setTitle('Set Help')
.setDescription('The `set` command is used to set settings for a guild.')
.addField('Parameters', 'chperms, slowmode, roleperms, icon, nick, afk')
.addField('Usage', '`/set [parameter]`')
.setColor(client.config.gold);

const hDelete = new Discord.RichEmbed()
.setTitle('Delete Help')
.setDescription('The `delete` command is used to delete something in a guild.')
.addField('Parameters', 'channel, role, message, category, nick')
.addField('Usage', '`/delete [parameter]`')
.setColor(client.config.gold);


const hNew = new Discord.RichEmbed()
.setTitle('New Help')
.setDescription('The `new` command is used to to create something in a guild.')
.addField('Parameters', 'channel(category), role.')
.addField('Usage', '`/new [parameter] [options]`')
.setColor(client.config.gold);

if (!args[0]) {
    message.channel.send(help);
    return;

};

if (args[0] === 'set') {
    message.channel.send(hSet);
    return;

};

if (args[0] === 'delete') {
    message.channel.send(hDelete);
    return;

};

if (args[0] === 'new') {
    message.channel.send(hNew);
    return;

};

}
