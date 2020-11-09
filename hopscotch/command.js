const { prefix } = require('../config.json')

module.exports = (client, aliases, users, callback ) => {


    client.on('message', message =>{
        const {voice} = message.member;
        callback(message);
    })

}