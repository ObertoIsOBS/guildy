const Discord = require('discord.js');
exports.run = (client, message, args) => {

const date = new Date;

const hour = date.getHours();

const min = date.getMinutes();

const year = date.getFullYear();

const mon = date.getMonth();

const day = date.getDate();

const fullDate = `${mon}/${day}/${year}`;

client.date = fullDate;

const time = hour + ":" + min;

client.time = time;

const embed = new Discord.RichEmbed()
.setTitle('Time at Server Florent')
.addField('Time', `${hour}:${min} (GMT - 4)`)
.addField('Location', 'New Hampshire, USA')
.addField('Date', fullDate)
.setColor(client.config.gold);

message.channel.send(embed);



}