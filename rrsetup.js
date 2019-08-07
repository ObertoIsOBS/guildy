 const Discord = require("discord.js");
const fs = require("fs");
const colors = require('C:/Users/tgumb/Desktop/Guildy/colors.json');
const storage = JSON.parse(fs.readFileSync('C:/Users/tgumb/Desktop/Guildy/commands/storage.json', 'utf8'));
    module.exports.run = async (client, message, args) => {

const noMsg = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription('Please provide a message ID')
.setColor(colors.red);

const msgErr = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription('I couldnt find the message.')
.setColor(colors.red);

const noCh = new Discord.RichEmbed()
.setTitle('Error ⚠️')
.setDescription('Please mention a channel')
.setColor(colors.red);

    if (!message.mentions.channels.first()) return message.channel.send(noCh);
if (!args[1]) return message.channel.send(noMsg);

const Success = new Discord.RichEmbed()
.setTitle(`Message and Channel Set✅`)
.setDescription(`The message and channel are set`)
.setColor(colors.green);

let channel = message.mentions.channels.first();

let msgId = args[1];

let msg = await message.mentions.channels.first().fetchMessage(msgId);

let msG = `${channel.id}/${msg.id}`;

storage[message.guild.id] = {
    message: msG
};

fs.writeFile('C:/Users/tgumb/Desktop/Guildy/commands/storage.json', JSON.stringify(storage), (err) => {
    if (err) console.log(err);

});


message.channel.send(Success);



    }