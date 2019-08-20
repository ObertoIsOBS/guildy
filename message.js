const Discord = require('discord.js');
const Keyv = require('keyv');
module.exports = async (client, message) => {
    let talkedRecently = client.talkedRecently;

    let time = client.time;

    let channel = client.channel;
  
    if (!channel) channel = 'none';
  
const adminRolesFile = new Keyv('', {'namespace': 'adminRoles'});


  // Ignore all bots
    if (!message.guild || message.author.bot) return;
  if (channel = message.channel) {
    if (talkedRecently.has(message.author.id)) {
      message.delete();

      return;

} else {

     // the user can type the command ... your command code goes here :)

  // Adds the user to the set so that they can't talk for a minute
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
  },time);
}

  }


let afkList = client.afkList;

let reason = client.reason;

if (afkList.has(message.author.id)) {

  afkList.delete(message.author.id)

let nick = message.member.nickname.slice(5);

if (message.member.nickname.startsWith('[')) {

  message.member.setNickname(nick);

}

  message.channel.send(`Welcome back ${message.author}! Your AFK was removed.`);

}


if (message.mentions.members.first()) {

  if (afkList.has(message.mentions.members.first().id)) message.channel.send('That user is AFK');

}

 if (!message.member.hasPermission('MANAGE_MESSAGES')) return;


// Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0 && message.content.indexOf(client.config.rrprefix) !== 0) return;
  
    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // Grab the command data from the client.commands Enmap
  
  if (message.content.indexOf(client.config.rrprefix) === 0) {

    const rrcmd = client.rrcommands.get(command);
  
  if (!rrcmd) return;

  cmd.run(client, message, args);


  };

    const cmd = client.commands.get(command);
  
  // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
  
    // Run the command
    cmd.run(client, message, args);
  };
  