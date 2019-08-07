const Discord = require('discord.js');
const colors = require('C:/Users/tgumb/Desktop/Guildy/colors.json');

module.exports.run = (client, message, args) => {

    const errEmbed = new Discord.RichEmbed()
    .setTitle('Error️ ⚠️')
    .setDescription('Unable do delete messages because they are too old.');
async function clear() {
    message.delete();
    const fetched = await message.channel.fetchMessages({limit: args[0]});
    message.channel.bulkDelete(fetched).then(purge => async function() {
 

        
    });

}
clear();

const Success = new Discord.RichEmbed()
.setTitle(`Messages Purged ✅`)
.setDescription(`${args[0]} messages were sucessfully deleted`)
.setColor(colors.green);


message.channel.send(Success).then(msg => {


msg.delete(5000);


});

}