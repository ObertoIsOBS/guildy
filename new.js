const Discord = require('discord.js');
const colors = require('C:/Users/tgumb/Desktop/Guildy/colors.json');
module.exports.run = (client, message, args) => {

    const noProp = new Discord.RichEmbed()
    .setTitle('Error ⚠️')
    .setDescription(`That object doesn\'t exist! If your having trouble try \`/help new\``)
    .setColor(colors.red);
    
    
    const noParam = new Discord.RichEmbed()
    .setTitle('Error ⚠️')
    .setDescription(`You didn\'t specify anthing to create! If your having trouble try \`/help new\``)
    .setColor(colors.red);

const Success = new Discord.RichEmbed()
.setTitle(`Sucessfuly Created ✅`)
.setDescription(`The object was created.`)
.setColor(colors.green);


if (!args[0]) return message.channel.send(noParam);


if (args[0] ==='channel') {

    const noArgCh = new Discord.RichEmbed()
.setTitle('New : Channel')
.setDescription('Creates a new channel')
.addField('Group', 'Guild Objects')
.addField('Usage', '`/new channel [name] [type]`')
.addField('Example', '`/new channel general text`')
.addField('Cooldown', 'None')
.addField('Permissions', '`MANAGE_CHANNELS`')
.setColor(colors.gold);

const noType = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription('Incorrect channel type: Please make sure you choose either `text`, `voice` or `category`.')
.setColor(colors.red);

const chErr = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription('Incorrect channel type: Please make sure you choose either `text`, `voice` or `category`.')
.setColor(colors.red);

    if (!args[1]) return message.channel.send(noArgCh);

if (args[2] !=='text' && args[2] !=='voice' && args[2] !=='category') return message.channel.send(noType);

    let name = args[1];
let typeArg = args[2];



message.guild.createChannel(name, { type: typeArg });


message.channel.send(Success);

return;

}

if (args[0] ==='role') {

const noArgRole = new Discord.RichEmbed()
.setTitle('New : Role')
.setDescription('Creates a new role.')
.addField('Group', 'Guild Objects')
.addField('Usage', '`/new role [name] [COLOR]`')
.addField('Example', '`/new role VIP BLUE`')
.addField('Cooldown', 'None')
.addField('Permissions', '`MANAGE_ROLES`')
.setColor(colors.gold);

const roleErr = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription('Please provide a color for the role')
.setColor(colors.red);


if (!args[1]) return message.channel.send(noArgRole);

if (!args[2]) return message.channel.send(roleErr);

let colorArg = args[2].toUpperCase();

message.guild.createRole({
    name: args[1],
    color: colorArg


})

message.channel.send(Success);

return;
}









if (args[0]) return message.channel.send(noProp);

}