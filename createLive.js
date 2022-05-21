


const Discord = require("discord.js");

const createLive = async (newPresence) => {
  const member = newPresence.member;

  //everyone role for permissions
  let everyoneRole = member.guild.roles.cache.find(r => r.name === '@everyone');

  
  //Find channel with Welcome
  let liveChannel = member.guild.channels.cache.find(channel => channel.name === "live-now");
  
  
  let activities = member.presence.activities;
  console.log(`Activity[1] is ${member.presence.status} by ${member.user.username}`)
  console.log(activities[0])

  //If channel not found
    if(!liveChannel) {
        //creates channel
        const tempo2 = member.guild.channels.create('live-now', { type: 'category', permissionOverwrites: [
        {
        id: everyoneRole.id,
        deny: ['SEND_MESSAGES'],
        }]})
        .then(result => {
          //console.log(result.id)
          //member.guild.channels.cache.get(result.id).send()
          return result.id
        })
       
    }

    else{
      //console.log(liveChannel)
      return liveChannel
    }

  
    
   







    
}

module.exports = createLive