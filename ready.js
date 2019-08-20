module.exports = (client) => {

    console.log(`Logged in as ${client.user.tag}!`);
    console.log('Bot Started');
client.user.setActivity('/help');
}
  
