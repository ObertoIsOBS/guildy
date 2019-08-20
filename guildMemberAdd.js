const fs = require('fs');
module.exports = (client, member) => {
  
  let wChannel = JSON.parse(fs.readFileSync("./wChannel.json", "utf8"));
  let wMessage = JSON.parse(fs.readFileSync("./wMessage.json", "utf8"));

  let channelName = wChannel[member.guild.id].channel;
  if (!channelName) return;
  
  let welcomeMessage = wMessage[member.guild.id].message;
  if (!welcomeMessage) return;

let channel = member.guild.channels.find(ch => ch.name === channelName);
if (!channel) return;
    
  msg = welcomeMessage.replace("{{user}}", member);
    
    channel.send(msg);

  }