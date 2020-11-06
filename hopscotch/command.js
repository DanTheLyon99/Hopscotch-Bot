const { prefix } = require('../config.json')

module.exports = (client, aliases, users, callback ) => {


    client.on('message', message =>{
        message.guild.members.forEach(member => {
            users.push(member.id)
        })

    })

}