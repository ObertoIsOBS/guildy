const Discord = require('discord.js');
const fs = require('fs');
const colors = require('C:/Users/tgumb/Desktop/Guildy/colors.json');
const ms = require('ms');
module.exports.run = async (client, message, args) => {
        
    const noProp = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription(`That object doesn\'t exist! If your having trouble try \`/help delete\``)
.setColor(colors.red);


const noParam = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription(`You didn\'t specify anthing to delete! If your having trouble try \`/help delete\``)
.setColor(colors.red);

    if (!args[0]) return message.channel.send(noParam);


const Success = new Discord.RichEmbed()
.setTitle(`Sucessfuly Deleted ✅`)
.setDescription(`The object was deleted.`)
.setColor(colors.green);




if (args[0] ==='channel') {

    let channel = message.mentions.channels.first() || message.channel;

const chErr = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription(`Hmm. I couldn't detect a channel to delete. Try mentioning one instead.`)
.setColor(colors.red);



    if (!channel) return message.channel.send(chErr);


    channel.delete();

const object = 'channel';

const textCh = message.channel;

if (textCh) message.channel.send(Success);
else message.author.send(Success);

return;

}



if (args[0] ==='msg') {
    let msgId = args[1];

const noArgsMsg = new Discord.RichEmbed()
.setTitle('Delete : Message')
.setDescription('Deletes a message by ID.')
.addField('Group', 'Guild Objects')
.addField('Usage', '`/delete message/msg [message ID]`')
.addField('Example', '`/delete msg 867530918394056789`')
.addField('Cooldown', 'None')
.addField('Permissions', '`MANAGE_MESSAGES`')
.setColor(colors.gold);

const msgErr = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription(`Hmm. I couldn't find that message.`)
.setColor(colors.red);

    if (!msgId) return message.channel.send(noArgsMsg);

  const msg = await message.channel.fetchMessage(msgId);

    if (!msg) return message.channel.send(msgErr);

    msg.delete();

message.channel.send(Success);

return;

}

  if (args[0] ==='role') {
   const noArgsRole = new Discord.RichEmbed()
.setTitle('Delete : Role')
.setDescription('Deletes a Role by Mention.')
.addField('Group', 'Guild Objects')
.addField('Usage', '`/delete role [@role]`')
.addField('Example', '`/delete role @Member`')
.addField('Cooldown', 'None')
.addField('Permissions', '`MANAGE_ROLES`')
.setColor(colors.gold);   

const r = message.mentions.roles.first();

if (!r) return message.channel.send(noArgsRole);

r.delete();

message.channel.send(Success);

return;

  }


if (args[0] ==='category') {

 const noArgsCat = new Discord.RichEmbed()
.setTitle('Delete : Category')
.setDescription('Deletes a Category by channel mention.')
.addField('Group', 'Guild Objects')
.addField('Usage', '`/delete category [#channel] [reason(o)]`')
.addField('Example', '`/delete category #general Cleaning Up`')
.addField('Cooldown', 'None')
.addField('Permissions', '`MANAGE_CHANNELS`')
.setColor(colors.gold); 

const catErr = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription(`Please mention one channel inside the category`)
.setColor(colors.red);

const catErr2 = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription(`This channel is in a category.`)
.setColor(colors.red);

if (!args[1]) return message.channel.send(noArgsCat);

let ch = message.mentions.channels.first();

if (!ch) return message.channel.send(catErr);

let cat = ch.parent;

if (!cat) return message.channel.send(catErr2);

cat.delete(args.join(' ').slice(2));

message.channel.send(Success);
return;

}


if (args[0] ==='nick') {

const noArgsNick = new Discord.RichEmbed()
.setTitle('Delete : Nickname')
.setDescription('Resets a users nickname by mention.')
.addField('Group', 'Guild Objects')
.addField('Usage', '`/delete nick [@user]`')
.addField('Example', '`/delete nick @nooblance`')
.addField('Cooldown', 'None')
.addField('Permissions', '`MANAGE_NICKNAMES`')
.setColor(colors.gold); 


let member = message.mentions.members.first();

if (!member) return message.channel.send(noArgsNick);

const uTag = member.tag;

member.setNickname(uTag);


message.channel.send(Success);

return;

}

if (args[0]) message.channel.send(noParam);



}