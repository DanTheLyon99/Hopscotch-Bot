const path = require('path');

const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('BOT TOKEN');

let NotDisconnectedChannel = [];
NotDisconnectedChannel = guild.members.fetch();
console.log (NotDisconnectedChannel);

bot.on('voiceStateUpdate', (oldState, newState) => {
  let newUserChannel = newState.member; // DISCONNECTED FROM CHANNEL
  let oldUserChannel = oldState.member; // CONNECTED TO CHANNEL  

  if(oldUserChannel.channelID && !newUserChannel.channelID) {

    if (newMember.id === 'MEMBER ID')         //Member 1
    {   
       newUserChannel.leave()
       .then(connection => {
          message.channel.send(":skull::woman_with_veil: HOPSCOTCH! :skull::woman_with_veil: ");
          connection.play(path.join(__dirname, 'hopscotch.mp3'));

          dispatcher.on("end", end => {newUserChannel.leave()});
       })
        .catch(console.error);

    }
  } 
});