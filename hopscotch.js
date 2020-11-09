const path = require('path');
const { token } = require('./config.json')

const Discord = require('discord.js');
const command = require('./hopscotch/command');
const bot = new Discord.Client();
bot.login('NzczNzUwMjc0MjI1MjA5Mzgy.X6NxGA.iAgiq2ttG7jjmKkw-oS0UZ5I1-g');
let users = null


bot.on('ready', () => {
  console.log('THE HOPPITY HAS BEEN SCOTCHED!');
 
    
    users = bot.guilds.cache.get('768570720040779846');
    users.members.cache.array().forEach(member =>console.log(member.user.id));


  command(bot, 'Gutknecht', users, message => {
    // const { voice }= message.member;
    // message.channel.send(':skull::woman_with_veil: HOPSCOTCH! :skull::woman_with_veil:')
    console.log(list);
    
  })
})
//261293595473084416 Eamonn's server
// const list = bot.guilds.get("768570720040779846");
// list.members.forEach(member => {
//    users.push(member.id);
//    console.log(users + " LIKES RICHARD");
//  })
bot.on('voiceStateUpdate', (oldMember, newMember) => {
  
  try{let oldUserChannel = oldMember.channel.id;
  let newUserChannel = newMember.voice.channel.id;}
  catch{
    const channel = bot.channels.cache.get('768570720040779850');
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection=>{
      connection.play(path.join(__dirname, 'hopscotch.mp3'));
    });
    
  }});
  


//   if(oldUserChannel === undefined && newUserChannel !== undefined) {
    
//     const channel = bot.channels.cache.get(oldMember.channel.id);
//     if (!channel) return console.error("The channel does not exist!");
//     channel.join().then(connection => {
//         // Yay, it worked!
//         console.log("Successfully connected.");
//     }).catch(e => {
      


//         // Oh no, it errored! Let's log it to console :)
//         console.error(e);
//     });
//   } 
// });

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