const fs = require('fs');
module.exports = (client, guild) => {

    let guildConf = JSON.parse(fs.readFileSync("./guildConf.json", "utf8"));

  guildConf[guild.id] ={
      wChannel: "welcome",
      wMessage: "Welcome {{user}} to {{guild}}!!!",
      logChannel: "logs"
   
  };

  fs.writeFile("./guildConf.json", JSON.stringify(guildConf), (err) => {
    if (err) console.log(err)
  });





    guild.owner.send(`Congrats!! Guildy has been added to your server **${guild}**!! Use the command \`/help\` in your server to get started.
    ***Keep in mind only people with \`MANAGE_SERVER\` perm can use this bot.***`);


}