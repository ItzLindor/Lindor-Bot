const { SystemFont } = require("@nodegui/nodegui");
const Canvas = require("canvas")
const Discord = require("discord.js")


const background = ["https://i.imgur.com/WgEJe8Q.png","https://i.imgur.com/zvWTUVu.jpeg", "https://i.imgur.com/PdnAjdz.png", "https://i.imgur.com/FbffKDr.png"];
const randomBackground = background[Math.floor(Math.random()*background.length)];

const dim = {
    height:675, 
    width: 1200, 
    margin: 50
}

const av = {
    size:256, 
    x: 480, 
    y: 170, 
    margin: 50
}

const generateImage = async (member) => {
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: "true", size: av.size})

    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")

    //draw background
    const backimg = await Canvas.loadImage(randomBackground)
    ctx.drawImage(backimg, 0, 0)

    //draw black tinted box
    ctx.fillStyle = "rgba(0,0,0,0.8)"
    ctx.fillRect(dim.margin, dim.margin, dim.width -2 * dim.margin, dim.height -2 * dim.margin)


    const avimg = await Canvas.loadImage(member.user.displayAvatarURL({format: "png", dynamic: "true", size: av.size}))
    ctx.save()

    ctx.beginPath()
    ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size /2, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()
    ctx.drawImage(avimg, av.x, av.y)
    ctx.restore()

    //writ in text
    ctx.fillStyle = "white"
    ctx.textAlign = 'center'
    ctx.font = "50px bangers"
    ctx.fillText("welcome", dim.width/2, dim.margin + 70)

    //draw username
    ctx.font = "60 bangers"
    ctx.fillText(username + discrim, dim.width/2, dim.height - dim.margin-125)


    ctx.font = "40 bangers"
    ctx.fillText("to the server", dim.width /2, dim.height - dim.margin - 50)


    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
    return attachment
}

module.exports = generateImage