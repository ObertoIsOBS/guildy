const Discord = require('discord.js');
const fs = require('fs');
const colors = require('C:/Users/tgumb/Desktop/Guildy/colors.json');
const ms = require('ms');
const Keyv = require('keyv');
module.exports.run = async (client, message, args) => {



const g = message.guild;

const embed = new Discord.RichEmbed()
.setTitle(`Settings for ${message.guild.name}(${message.guild.nameAcronym})`)
.addField('Channel Count', g.channels.size)
.addField('Member Count', g.members.size)
.addField('Roles Count', g.roles.size)
.addField('Owner', g.owner)
.addField('Region', g.region)
.setThumbnail(g.iconURL)
.setColor(colors.gold);


message.channel.send(embed);






}