const path = require('path');
const { token } = require('../config.json')

const Discord = require('discord.js');
const command = require('./hopscotch/command');
const bot = new Discord.Client();
bot.login(token);
let users = [];

bot.on('ready', () => {
  console.log('THE HOP HAS BEEN SCOTCHED!');

  command(bot, 'Gutknecht', users, message => {
    message.channel.send('THE HOP HAS BEEN SCOTCHED!')
  })
})
bot.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel


  if(oldUserChannel !== undefined && newUserChannel === undefined) {
    
      newMember.channel.send("beeeeeeeeeep");
       newUserChannel.join()
       .then(connection => {
          console.log("Joined voice channel!");
           message.channel.send(":skull::woman_with_veil: HOPSCOTCH! :skull::woman_with_veil: ");
           connection.play(path.join(__dirname, './hopscotch/hopscotch.mp3'));
          dispatcher.on("end", end => {newUserChannel.leave()});
       })
        .catch(console.error);
  } 
});

// bot.on('voiceStateUpdate', (oldState, newState) => {
//   let newUserChannel = newState.member; // DISCONNECTED FROM CHANNEL
//   let oldUserChannel = oldState.member; // CONNECTED TO CHANNEL  

//   let NotDisconnectedChannel = [];
//   NotDisconnectedChannel = newState.guild.members.fetch();// ALL MEMBERS WHO HAVEN'T LEFT THE SERVER
//   console.log (NotDisconnectedChannel);
//   if(newState.guild.available)
//     newState.guild.members.fetch().then(console.log).catch(console.error);

//   if(oldUserChannel.channelID && !newUserChannel.channelID) {

//     if (NotDisconnectedChannel[0])         //Member 1
//     {   
//        newUserChannel.leave()
//        .then(connection => {
//           message.channel.send(":skull::woman_with_veil: HOPSCOTCH! :skull::woman_with_veil: ");
//           connection.play(path.join(__dirname, 'hopscotch.mp3'));

//           dispatcher.on("end", end => {newUserChannel.leave()});
//        })
//         .catch(console.error);

//     }
//   } 
//});