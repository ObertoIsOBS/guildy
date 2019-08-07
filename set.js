const Discord = require('discord.js');
const fs = require('fs');
const colors = require('C:/Users/tgumb/Desktop/Guildy/colors.json');
const ms = require('ms');
const Keyv = require('keyv');
const Enmap = require('enmap');
module.exports.run = async (client, message, args) => {
    
    const keyv = new Keyv();

keyv.on('error', err => console.error('Keyv connection error:', err));

client.keyv = keyv;





    
    const noProp = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription(`That object doesn\'t exist! If your having trouble try \`/help set\``)
.setColor(colors.red);


const noParam = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription(`You didn\'t specify anthing to set! If your having trouble try \`/help set\``)
.setColor(colors.red);

    if (!args[0]) return message.channel.send(noParam);



    const noChName = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription('You didn\'t provide a channel name.')
.setColor(colors.red);
const noCh = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription('I couldn\'t find that channel. Make sure you spelt it right.')
.setColor(colors.red);

    
const Success = new Discord.RichEmbed()
.setTitle(`Setting Updated ✅`)
.setDescription(`The setting was changed.`)
.setColor(colors.green);
// We can confirm everything's done to the client.

    const error = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription('Looks like there was an error saving your changes. This proabably our fault, dont worry were already working on it. **5:111**')
.setColor(colors.red);
    


if (args[0] ==='slowmode') {

const noArgSlow = new Discord.RichEmbed()
.setTitle('Set : Slowmode')
.setDescription('Sets a custom slowmode for a specific channel.')
.addField('Group', 'Settings')
.addField('Usage', '`/set slowmode [channel] [time]`')
.addField('Example', '`/set slowmode #general 10s`')
.addField('Cooldown', 'None')
.addField('Permissions', '`MANAGE_CHANNELS`')
.setColor(colors.gold);


const noChSlow = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription('You didn\'t mention a channel.')
.setColor(colors.red);

const noUserSlow = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription('You didn\'t mention a user to set the slowmode for.')
.setColor(colors.red);

const noTimeSlow = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription('You didn\'t specify a time.')
.setColor(colors.red);

    if (!args[1]) return message.channel.send(noArgSlow);

let channel = message.mentions.channels.first()

if (!channel) return message.channel.send(noChSlow);


if (!args[2]) return message.channel.send(noTimeSlow);

let timeArg = args[2]

let time = ms(timeArg);


client.time = time;

client.channel = channel;

message.channel.send(Success);

return;

}



if (args[0] ==='chperms') {

    let channel = message.mentions.channels.first();

    let mentioned = message.mentions.users.first() || message.mentions.roles.first();

let toggle = args[3];

let perm = args[4];


    const noArgChPemrs = new Discord.RichEmbed()
.setTitle('Set : Channel Permissions')
.setDescription('Sets a channels permissions for a specific user or role')
.addField('Group', 'Settings')
.addField('Usage', '`/set chperms [channel] [user/role] [true/false] [permission]`')
.addField('Example', '`/set chperms #general @nooblance false SEND_MESSAGES`')
.addField('Cooldown', 'None')
.addField('Permissions', '`MANAGE_CHANNELS`')
.setColor(colors.gold);


const noChChperm = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription('You didn\'t mention a channel.')
.setColor(colors.red);

const noUserChPerm = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription('You didn\'t mention a user or role.')
.setColor(colors.red);

const noToggle = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription('Please provide the option true or false.')
.setColor(colors.red);

const noChPerm = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription('Please provide a permission to overide.')
.setColor(colors.red);

if (!args[1]) return message.channel.send(noArgChPemrs);

if (!channel) return message.channel.send(noChChperm);

if (!mentioned) return message.channel.send(noUserChPerm)

if (!toggle) return message.channel.send(noToggle);

if (!perm) return message.channel.send(noChPerm)
if (toggle ==='false') {
channel.overwritePermissions(
    mentioned,
    { [perm]: false },
    // optional 'reason' for permission overwrite
    `Permissions edited by ${message.author.tag}`
)
// handle responses / errors
.then(console.log)
.catch(console.log);

message.channel.send(Success);

return;
}

}

let channel = message.mentions.channels.first();

let mentioned = message.mentions.users.first() || message.mentions.roles.first();

let toggle = args[3];

let perm = args[4];
if (toggle ==='true') {
    channel.overwritePermissions(
        mentioned,
        { [perm]: true },
        // optional 'reason' for permission overwrite
        `Permissions edited by ${message.author.tag}`
    )
    // handle responses / errors
    .then(console.log)
    .catch(console.log);
    
    message.channel.send(Success);
    
    return;
    }


    if (args[0] ==='roleperms') {
    
        let mentioned = message.mentions.roles.first();
    
    let perm = args[2];
    
    
        const noArgRolePerms = new Discord.RichEmbed()
    .setTitle('Set : Role Permissions')
    .setDescription('Sets permissions for a specific role')
    .addField('Group', 'Settings')
    .addField('Usage', '`/set roleperms [role] [permission]`')
    .addField('Example', '`/set roleperms @Members SEND_MESSAGES`')
    .addField('Cooldown', 'None')
    .addField('Permissions', '`MANAGE_ROLES`')
    .setColor(colors.gold);
    
    
   
    
    const noRole = new Discord.RichEmbed()
    .setTitle('Error ⚠️')
    .setDescription('You didn\'t mention a role.')
    .setColor(colors.red);
    
    
    const noRolePerm = new Discord.RichEmbed()
    .setTitle('Error ⚠️')
    .setDescription('Please provide a permission to add')
    .setColor(colors.red);
    
    if (!args[1]) return message.channel.send(noArgRolePerms);
        
    if (!mentioned) return message.channel.send(noRole)
        
    if (!perm) return message.channel.send(noRolePerm)

    mentioned.setPermissions([`${perm}`]);
    
message.channel.send(Success);

return;

}
  



if (args[0] ==='logchannel') {

    let channelArg = message.mentions.channels.first();

    const noLogChannel = new Discord.RichEmbed()
.setTitle('Set : Log Channel')
.setDescription('Sets the log channel for the current guild.')
.addField('Group', 'Settings : Guild')
.addField('Usage', '`/set logchannel`')
.addField('Example', '`/set logchannel #general`')
.addField('Cooldown', 'None')
.addField('Permissions', '`MANAGE_CHANNELS`')
.setColor(colors.gold);

    if (!channelArg) return message.channel.send(noLogChannel);


let logChannel = new Enmap();

client.logchannel = logChannel;

let channel = `${channelArg.id}:${message.guild.id}`;

logChannel.set(message.guild.id, channelArg);

message.channel.send(Success);

return;

}


if (args[0] ==='nick') {

    const user = message.mentions.members.first() || message.member;

const newNick = args[1];

const noNick = new Discord.RichEmbed()
.setTitle('Set : Nickname')
.setDescription('Sets the log channel for the current guild.')
.addField('Group', 'Settings : User')
.addField('Usage', '`/set nick [user(o)]`')
.addField('Example', '`/set nick Nooblance` or `/set nick Nooblance @wumpus`')
.addField('Cooldown', 'None')
.addField('Permissions', '`MANAGE_NICKNAMES`')
.setColor(colors.gold);

const nickErr = new Discord.RichEmbed()
    .setTitle('Error ⚠️')
    .setDescription('Unable to change nickname.')
    .setColor(colors.red);

if (!newNick) return message.channel.send(noNick);

try {

user.setNickname(newNick, `Changed by ${message.author.tag}`);

message.channel.send(Success);
}
catch(err) {

message.channel.send(nickErr);

}

return;

}



if (args[0] ==='afk') {
    let reason = args[1];

 if (!reason) reason = 'AFK';

client.reason = reason;

let nick = message.member.nickname || message.author.username;

let afkList = client.afkList;

afkList.add(message.author.id);


message.member.setNickname('[AFK] ' + nick);

const afkSuccess = new Discord.RichEmbed()
.setTitle(`AFK Set ✅`)
.setDescription(`Your afk was set`)
.setColor(colors.green);

message.channel.send(afkSuccess);


return;

}

if (args[0] ==='icon') {

const iconErr = new Discord.RichEmbed()
    .setTitle('Error ⚠️')
    .setDescription('Please include an attachment to set the icon to.')
    .setColor(colors.red);

if (!message.attachments) return message.channel.send(iconErr);

let images = message.attachments;



message.guild.setIcon(message.attachments.array()[0].url);


message.channel.send(Success)

return;
}

if (args[0]) return message.channel.send(noProp);

}

