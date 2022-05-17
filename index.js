const { Client, Intents, MessageAttachment} = require("discord.js");
const checkWelcome = require("./checkWelcome");
const generateImage = require("./generateImage");
const async = require("async");

require('dotenv').config()
const TOKEN = process.env.TOKEN

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES],
});


const Responses = [
  "farts/fart-01.mp3",
  "farts/fart-02.mp3",
  "farts/fart-03.mp3",
  "farts/fart-04.mp3",
  "farts/fart-05.mp3",
];
const Response = Math.floor(Math.random() * Responses.length);

console.log(Responses[Response])
const farts = new MessageAttachment(`${Responses[Response]}`, "fart.mp3")





client.on("ready", () => {
  let channel = "974277002372722689"
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  console.log(`|Logged in as ${client.user.tag}!|`);
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')


  

                     
         }
     );


client.once("ready", () => {
  
  client.user.setActivity('xHamster', { type: 'WATCHING'});
    });


// const welcomeChannelId = '975216440204460063'



client.on('guildMemberAdd', async (member) => {
  const welcome = await checkWelcome(member)
  
  console.log((`Welcome <@${member.id}>! You are the ${member.guild.memberCount} +th member!`));

  
})



  





client.on("messageCreate", async (msg) => {
  const Owner = msg.guild.ownerId
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
  



 conditions = ["ping", "Ping"];

  if (msg.content ===('ping')) { 
    msg.reply("pong", {
      files: [farts]
    });
  }
  if (msg.content === ('Ping')) {
    msg.reply("pong");
  }

  if (msg.content === ('fart')) {
    msg.reply({
      files: [farts]
    });
  }
  if (msg.content === ('Fart')) {
    msg.reply({
      files: [farts]
    });
  }

  if (channel === botChannel) {
    if (message.startsWith(prefix)) {
      const command = message.slice(prefix.length).split("!")[0];

      let admins = ["OhLindor#8465", Owner];

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
    msg.reply("This is not a bot channel");

  }

  // if (msg.content === "Hello") {
  //   sendMessage("Hello!");
  // }
})



client.login(TOKEN);
