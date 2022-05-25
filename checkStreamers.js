const Discord = require("discord.js");


const sendLive = async (newPresence, liveMessages) => {
    
    
    let StreamChannel = newPresence.guild.channels.cache.find(channel => channel.name === "live-now"); //finds live-now channel to fetch/send messages
  
    const member = newPresence.member;

    


  newPresence.activities.forEach(activity => {    //for each new activity
    if (newPresence.user.bot) return;

    if (activity.type == "STREAMING") {          //If streaming, send message to live-now channel
      StreamChannel.messages.fetch({ limit: 100 }).then(messages => {
        console.log(`Received ${messages.size} messages`);

        messages.forEach(message => {
          if (!message.content.includes(member.user.username)){
            console.log(`${member.user.username} is streaming at ${activity.url}.`) //console view
            StreamChannel.send(`${member.user.username} is streaming at ${activity.url}.`)
            liveMessages.push(member.user.username)
          }
        })
      })
    }

    console.log(liveMessages)
    return
      })
      StreamChannel.messages.fetch({ limit: 100 }).then(messages => {
        console.log(`Received ${messages.size} messages`);
    
                                  //If user is still streaming delete message 
        
        messages.forEach(message => {                                   //Iterate through the messages here with the variable "messages".
          
          if (message.content.includes(member.user.username)) {
            console.log('deleting')
            liveMessages.splice((liveMessages.indexOf(member.user.username)),1)
            message.delete()
            return;
          }
    
        })
      })
}

module.exports = sendLive