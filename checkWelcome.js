const Discord = require("discord.js");
const generateImage = require("./generateImage");

const checkWelcome = async (member) => {
  
    const img = await generateImage(member)

  //everyone role for permissions
    let everyoneRole = member.guild.roles.cache.find(r => r.name === '@everyone');

  
  //Find channel with Welcome
    let welcomeChannel = member.guild.channels.cache.find(channel => channel.name === "welcome");
  

  //If channel not found
    if(!welcomeChannel) {
        //creates channel
        const tempo1 = member.guild.channels.create('welcome', { type: 'category', permissionOverwrites: [
        {
        id: everyoneRole.id,
        deny: ['SEND_MESSAGES'],
        }]}).then(result => {
          
        //Sends message to channel after creating
            member.guild.channels.cache.get(result.id).send({
            content: `<@${member.id}> Welcome to the server! You are the ${member.guild.memberCount}th member!`,
            files: [img]
            })
        
       
    })
  }

  //if channel is created already
  else{
    welcomeChannel.send({
    content: `<@${member.id}> Welcome to the server! You are the ${member.guild.memberCount}th member!`,
    files: [img]
    })
  }
}

module.exports = checkWelcome