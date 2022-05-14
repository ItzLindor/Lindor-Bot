const { Client, Intents} = require("discord.js");
const generateImage = require("./generateImage")


const async = require("async");

require('dotenv').config()
const TOKEN = process.env.TOKEN



const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES],
});



// async function EmbedAsync (member) {
//   const name = member.user
//   let embed = await new MessageEmbed()

//   .setColor("#7c2ae8")
//   .setAuthor(name.tag, name.displayAvatarURL())
//   .setTitle(`Welcome!`)
//   .setDescription(`Welcome to the discord!`  + (name) +'! You are the ' + (guild.memberCount) +'th member!')
//   .setImage("https://media3.giphy.com/media/mCbUi0FyYhHHhutEV8/giphy.gif")
//   return channel.send({ embeds: [embed] })
// }

client.on("ready", () => {
  let channel = "974277002372722689"
  console.log(`Logged in as ${client.user.tag}!`);

  
                     
         }
     );


client.once("ready", () => {
  function presence() {
   // let status = ['<help for help'] //you can add how many you like
    //let rstatus = Math.floor(Math.random() * status.length); //this chooses a status from the ones you typed up
    client.user.setPresence({
        status: "online", //you can change to offline, dnd
        game: {
          name: "xHamster",
          type: "WATCHING"
        }})
                    
        }
    });


const welcomeChannelId = '974277002372722689'

client.on('guildMemberAdd', async (member) => {
  const img = await generateImage(member)

  member.guild.channels.cache.get(welcomeChannelId).send({
    content: `<@${member.id}> Welcome to the server! You are the ${member.guild.memberCount}th member!`,
    files: [img]
    })

//   member.createDM().then(function (channel) {
    
    
//     let botChannel = "670544966442811405";
//     const sendMessage = (message) => {
//       client.channels.cache.get(botChannel).send('Welcome ' + (member.username) +'! You are the ' + (guild.memberCount) +'th member!');
//     };
//   return channel.send('Welcome ' + (member.username) +'! You are the ' + (members) +'th member!')
//   }

//   )
}
 );







//  client.on("guildMemberAdd", async (member) => {  
//   let name = member.user

//   if (guild != member.guild) {
//   return console.log("erro");
//   } else {
//   let embed = await new Discord.MessageEmbed()
//   .setColor("#7c2ae8")
//   .setAuthor(member.user.tag, member.user.displayAvatarURL())
//   .setTitle(`Welcome!`)
//   .setDescription(`Welcome to the discord!`  + (name) +'! You are the ' + (msg.guild.memberCount) +'th member!')
//   .setImage("https://media3.giphy.com/media/mCbUi0FyYhHHhutEV8/giphy.gif")
  
//   return channel.send("****You Have Been Verified. :ballot_box_with_check:****")
//    }
//  }
//  )})




// client.on("guildMemberAdd", async(member, count) => {
//   let botchannel = "974277002372722689"
//   let name = member.user
//   const sendMessage = (message) => {
//     client.channels.cache.get(botchannel).send(message);
//   }

//   sendMessage(('This server has' + count +' members'))

//   sendMessage(('Welcome ' + (name) +'! You are the ' + (msg.guild.memberCount) +'th member!'))
// }
// );






client.on("messageCreate", async (msg) => {
  if (msg.author.bot) return; // Ignore all bots
  let prefix = "!";
  let message = await msg.content;

  let channel = msg.channelId;
  let botChannel = "670544966442811405";

  let name = ''


  const sendMessage = (message) => {
    client.channels.cache.get(botChannel).send(message);
  };

  // const embed = (message) => {
  //   client.channels.cache.get(botChannel).URL('twitch.tv');
  // };
  console.log(('Welcome ' + (msg.author.username) +'! You are the ' + (msg.guild.memberCount) +'th member!'));



 conditions = ["ping", "Ping"];

  if (msg.content ===('ping')){ 
    msg.reply("pong");
}
  if (msg.content === ('Ping')) {
    msg.reply("pong");
  }

  if (channel === botChannel) {
    if (message.startsWith(prefix)) {
      const command = message.slice(prefix.length).split("!")[0];

      let admins = ["OhLindor#8465"];

      // let isAdmin = `${msg.author.username}#${msg.author.discriminator}` in admins;
      let isAdmin = msg.member.roles.cache.find(role => role.name === "Admin");
      
      
      //sends command responses
      switch (command) {
        case "stats":
          isAdmin
            ? sendMessage(`This server has ${msg.guild.memberCount} members`)
            : sendMessage("You are not an admin");
          break;

        case "help":
          sendMessage("This is a help command");
          break;

        // case "embed":
        //   sendMessage("This is a help command");
        //   break;
      }
    }
  } 
  else {
    sendMessage("This is not a bot channel");
    if (message.author == client.user){
      return}
  }

  // if (msg.content === "Hello") {
  //   sendMessage("Hello!");
  // }
})

client.login(TOKEN);
